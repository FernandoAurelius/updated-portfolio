<template>
  <div class="bg-gray-800 border-t border-b border-dashed border-gray-700">
    <div data-aos="fade-up" class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700 p-8">
      <!-- Personal Goals Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-indigo-600 mb-6">{{ $t('achievements.goals.header') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="goalType in goalTypes" :key="goalType"
               class="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 class="text-xl text-hot-pink font-semibold mb-3">
              {{ $t(`achievements.goals.${goalType}`) }}
            </h3>
            <ul class="space-y-2 text-gray-300">
              <li v-for="(goal, index) in $t(`achievements.goals.${goalType}Items`)" :key="index"
                  class="flex items-center">
                <span class="mr-2">{{ goal.icon }}</span>
                <span class="font-semibold">{{ goal.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Professional Experience Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-indigo-600 mb-6">{{ $t('achievements.professional.title') }}</h2>
        <div class="space-y-6">
          <div v-for="(job, index) in $t('achievements.professional.items')" :key="index"
               class="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl text-hot-pink font-semibold">{{ job.company }}</h3>
                <p class="text-gray-400">{{ job.position }}</p>
              </div>
              <span class="text-gray-500">{{ job.period }}</span>
            </div>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li v-for="(achievement, aIndex) in job.achievements" 
                  :key="aIndex">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Academic Section -->
      <section>
        <h2 class="text-2xl font-bold text-indigo-600 mb-6">{{ $t('achievements.education.header') }}</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 class="text-xl text-hot-pink font-semibold mb-3">
              {{ $t('achievements.education.currentTitle') }}
            </h3>
            <div class="space-y-4">
              <div v-for="(edu, index) in $t('achievements.education.current')" :key="index">
                <p class="text-gray-300 font-medium">{{ edu.institution }}</p>
                <p class="text-gray-400">{{ edu.program }}</p>
                <p class="text-gray-500">{{ edu.graduation }}</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 class="text-xl text-hot-pink font-semibold mb-3">
              {{ $t('achievements.education.achievementsTitle') }}
            </h3>
            <ul class="space-y-3">
              <li v-for="(achievement, index) in $t('achievements.education.achievements')" :key="index"
                  class="flex items-start">
                <span class="mr-2 text-yellow-500">{{ achievement.icon }}</span>
                <div>
                  <p class="text-gray-300 font-medium">{{ achievement.title }}</p>
                  <p class="text-gray-400 text-sm">{{ achievement.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementsSection',
  data() {
    return {
      goalTypes: ['shortTerm', 'midTerm', 'longTerm']
    }
  }
}
</script>
