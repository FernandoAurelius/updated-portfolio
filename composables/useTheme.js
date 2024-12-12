import { ref, onMounted } from '@nuxtjs/composition-api'

export const useTheme = () => {
  const isDarkMode = ref(true)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
    updateTheme()
  }

  const updateTheme = () => {
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDarkMode.value = savedTheme ? savedTheme === 'dark' : true
    updateTheme()
  })

  return {
    isDarkMode,
    toggleTheme
  }
}
