<template>
    <button @click="toggleTheme"
        class="fixed top-4 right-4 p-2 rounded-full transition-colors dark:hover:bg-gray-700 hover:bg-gray-200">
        <span v-if="isDarkMode" class="text-gray-300">🌙</span>
        <span v-else class="text-gray-800">☀️</span>
    </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useTheme from '~/composables/useTheme'

export default defineComponent({
    setup() {
        const { isDarkMode, toggleTheme } = useTheme()

        return {
            isDarkMode,
            toggleTheme
        }
    }
})
</script>