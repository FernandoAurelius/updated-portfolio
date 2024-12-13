<template>
    <div class="relative w-full md:w-auto">
        <button @click.stop="toggleDropdown" 
                class="flex justify-between items-center w-full md:w-auto px-4 py-2 
                       bg-transparent border border-gray-200 dark:border-gray-700 
                       rounded-md cursor-pointer text-gray-700 dark:text-gray-300 
                       hover:bg-gray-200 dark:hover:bg-gray-700/30 transition-colors">
            <span>{{ $i18n.locale.toUpperCase() }}</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-show="isOpen"
             @click.stop
             class="md:absolute static mt-2 bg-white dark:bg-gray-900 
                    border border-gray-200 dark:border-gray-700 
                    rounded-md shadow-lg
                    md:right-0
                    w-full md:w-48">
            <div class="py-1">
                <nuxt-link 
                    v-for="locale in $i18n.locales" 
                    :key="locale.code" 
                    :to="switchLocalePath(locale.code)"
                    class="block w-full px-4 py-3 md:py-2 text-left text-gray-700 
                           dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                           transition-colors"
                    @click.stop="handleLocaleChange(locale.code)">
                    {{ locale.name }}
                </nuxt-link>
            </div>
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
        toggleDropdown(event) {
            event.stopPropagation();
            this.isOpen = !this.isOpen
        },
        closeDropdown() {
            this.isOpen = false
        },
        handleLocaleChange(localeCode) {
            // First change the locale
            this.$nextTick(() => {
                // Then close the dropdown and mobile menu
                this.isOpen = false;
            });
        },
        handleClickOutside(event) {
            // Only handle click outside if the dropdown is open
            if (this.isOpen && !this.$el.contains(event.target)) {
                this.isOpen = false
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside)
    }
}
</script>

<style scoped>
/* Add any additional styling here if needed */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
