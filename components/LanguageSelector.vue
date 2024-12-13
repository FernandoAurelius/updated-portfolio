<template>
    <div class="relative inline-block">
        <button @click="toggleDropdown" 
                class="px-4 py-2 bg-transparent border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/30 transition-colors 
                       md:w-auto w-full text-left">
            {{ $i18n.locale.toUpperCase() }}
        </button>

        <div :class="[
            'absolute right-0 min-w-[160px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 z-50 transition-all shadow-sm',
            'md:static md:w-auto w-full mt-2',
            isOpen ? 'block' : 'hidden'
        ]">
            <nuxt-link 
                v-for="locale in $i18n.locales" 
                :key="locale.code" 
                :to="switchLocalePath(locale.code)"
                class="block px-4 py-2 text-gray-700 dark:text-gray-300 no-underline 
                       hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:py-2 py-3"
                @click="isOpen = false">
                {{ locale.name }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.isOpen = false
            }
        })
    }
}
</script>
