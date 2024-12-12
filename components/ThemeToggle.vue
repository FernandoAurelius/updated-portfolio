<template>
    <button 
      @click="toggleTheme" 
      class="fixed top-4 right-4 p-2 rounded-full transition-colors dark:hover:bg-gray-700 hover:bg-gray-200"
    >
      <span v-if="isDark" class="text-gray-300">🌙</span>
      <span v-else class="text-gray-800">☀️</span>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDark: true
      }
    },
    methods: {
      toggleTheme() {
        this.isDark = !this.isDark
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', this.isDark)
      }
    },
    mounted() {
      const savedTheme = localStorage.getItem('theme')
      this.isDark = savedTheme ? savedTheme === 'dark' : true
      document.documentElement.classList.toggle('dark', this.isDark)
    }
  }
  </script>
  