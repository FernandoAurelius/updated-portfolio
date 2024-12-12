<template>
    <button @click="toggleTheme"
        class="fixed left-1/2 top-4 -translate-x-1/2 p-2 rounded-full transition-colors dark:hover:bg-gray-700 hover:bg-gray-200 z-[1000]">
        <span v-if="isDarkMode" class="text-gray-300">🌙</span>
        <span v-else class="text-gray-800">☀️</span>
    </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useTheme from '~/composables/useTheme'

export default defineComponent({
    setup() {
        console.log('useTheme imported as:', useTheme)
        const { isDarkMode, toggleTheme } = useTheme()
        
        console.log('isDarkMode:', isDarkMode.value)
        
        return {
            isDarkMode,
            toggleTheme
        }
    }
})
</script>
