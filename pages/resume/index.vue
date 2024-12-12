<template>
  <div class="max-w-7xl px-4 mx-auto py-12 border-l border-r border-dashed border-gray-700">
    <div class="border-l border-r border-dashed border-gray-200 dark:border-gray-700">
      <div class="shadow-md max-w-5xl mx-auto bg-white dark:bg-gray-800 overflow-hidden rounded-lg">
        <!-- Header Section -->
        <div data-aos="fade-up" class="bg-gray-100 dark:bg-gray-900 py-3 px-6 flex justify-between items-center">
          <h1 class="text-lg flex flex-row font-semibold text-gray-900 dark:text-gray-100">
            <span class="pr-1">{{ $t('nav.resume') }}</span>
            - <span class="pl-1 hidden md:block">{{ $config.name }}</span>
          </h1>
          
          <!-- Download Button -->
          <a target="_blank" 
             rel="noreferrer" 
             :href="$config.resume.pdfUrl" 
             :download="`${$config.name}.pdf`"
             class="inline-flex items-center px-4 py-2 border border-transparent 
                    text-sm font-medium rounded-md shadow-sm
                    text-white bg-indigo-600 hover:bg-indigo-700
                    dark:bg-indigo-500 dark:hover:bg-indigo-600
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500 dark:focus:ring-offset-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 class="-ml-1 mr-3 h-5 w-5" 
                 viewBox="0 0 20 20" 
                 fill="currentColor">
              <path fill-rule="evenodd" 
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" 
                    clip-rule="evenodd" />
            </svg>
            {{ $t('download') }}
          </a>
        </div>

        <!-- PDF Viewer Section -->
        <div class="px-4 py-5 sm:p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div class="w-full text-gray-900 dark:text-gray-100 font-bold">
            <PdfViewer 
              class="shadow-md rounded-lg overflow-hidden" 
              :src="$config.resume.pdfUrl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `resume -- ${this.$config.name}`
    }
  },
}
</script>

<style scoped>
/* Add smooth transitions for theme switching */
.theme-transition {
  transition: all 0.3s ease-in-out;
}

/* Custom styles for PDF viewer if needed */
:deep(.pdf-viewer) {
  @apply bg-white dark:bg-gray-800;
}
</style>
