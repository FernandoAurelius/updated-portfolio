<template>
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div>
      <HeroSection/>
      <Description/>
      <Recommendations v-if="$config.recommendations.enabled"/>
      <LazyRecentBlog v-if="$config.blog.enabled && posts" :posts="posts"/>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `home -- ${this.$config.name}`,
    }
  },
  data() {
    return {
      posts: null
    }
  },
  async created() {
    const fetchDocsLabel = 'fetchAllPosts'
    console.time(fetchDocsLabel)
    try {
      const posts = await this.$content('posts')
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.posts = posts
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
  },
}
</script>

<style>
</style>
