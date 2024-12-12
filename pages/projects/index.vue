<template>
  <div class="relative max-w-7xl py-6 mx-auto">
    <!-- Container with adaptive border colors -->
    <div class="border-r border-l border-dashed border-gray-200 dark:border-gray-700">
      <!-- Header Section -->
      <div data-aos="fade-up" class="text-center">
        <h2 class="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100">
          {{ $t('projects.header') }}
        </h2>
        <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-600 dark:text-gray-400">
          {{ $t('projects.subtext') }}
        </p>
      </div>
      <!-- Language Note -->
      <div data-aos="fade-in" class="text-center mt-4 px-4 text-xs leading-6 text-hot-pink">
        {{ $t('projects.languageNote') }}
      </div>


      <!-- Technology Filter Tabs -->
      <div data-aos="zoom-in"
        class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4">
        <nav class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4" aria-label="Tabs">
          <button v-for="tech in techs" :key="tech" @click="currentTech = tech" :class="{
            'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100': tech === currentTech,
            'text-gray-600 dark:text-gray-400 hover:text-hot-pink dark:hover:text-hot-pink': tech !== currentTech
          }"
            class="flex px-3 py-2 font-medium text-sm rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-hot-pink focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            {{ tech }}
          </button>
        </nav>
      </div>

      <!-- Projects Grid -->
      <div data-aos="zoom-in" class="mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3">
        <ProjectCard v-for="project in projectsByTechs" :key="project.slug" :project="project"
          class="hover:-rotate-12 transition-transform duration-300" />
      </div>
    </div>
  </div>
</template>

<script>
const ALL = 'all'

export default {
  head() {
    return {
      title: `projects -- ${this.$config.name}`
    }
  },
  computed: {
    techs() {
      let techs = []
      this.projects.forEach((project) => {
        project.tech.split(' ').forEach((tech) => {
          if (tech.trim() !== "") {
            techs.push(tech.trim())
          }
        })
      })
      return [ALL, ...new Set(techs)]
    },
    projectsByTechs() {
      if (this.currentTech === ALL)
        return this.projects
      return this.projects.filter(project => project.tech.includes(this.currentTech))
    }
  },
  data() {
    return {
      currentTech: ALL,
      ALL: ALL, // exporting it to template
    }
  },
  async asyncData({ $content }) {
    const fetchDocsLabel = 'fetchAllProjects'
    console.time(fetchDocsLabel)
    const projects = await $content('projects')
      .without(['body', 'toc'])
      .sortBy('id', 'asc')
      .fetch()
    console.timeEnd(fetchDocsLabel)
    return {
      projects
    }
  }
}
</script>

<style scoped></style>
