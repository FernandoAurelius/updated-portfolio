<template>
  <div class="bg-gray-800 border-t border-b border-dashed border-gray-700">
    <div data-aos="fade-up" class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700">
      <div class="max-w-prose text-center mx-auto py-4">
        <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">
          {{ $t('githubCalendar.subtext') }}
        </p>
        <a 
          :href="`https://github.com/${$config.social.github}`" 
          target="_blank" 
          rel="noreferrer" 
          class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"
        >
          {{ $t('githubCalendar.header') }}
        </a>
      </div>
      <div class="calendar max-w-6xl content-center lowercase p-4">
        <!-- Calendar will be injected here -->
      </div>
    </div>
  </div>
</template>


<script>
import 'github-calendar/dist/github-calendar.css'
import GitHubCalendar from 'github-calendar'

export default {
  mounted() {
    try {
      this.fetchGitHubContributions();
    } catch (error) {
      console.error('Error initializing GitHub calendar:', error);
    }
  },
  methods: {
    async fetchGitHubContributions() {
      const username = this.$config.social.github;
      const response = await fetch(`https://github.com/users/${username}/contributions`);
      const html = await response.text();
      
      // Create a temporary element to parse the HTML
      const temp = document.createElement('div');
      temp.innerHTML = html;
      
      // Find the calendar element
      const calendar = temp.querySelector('.js-calendar-graph');
      if (calendar) {
        // Clear existing content and append the new calendar
        const container = this.$el.querySelector('.calendar');
        container.innerHTML = '';
        container.appendChild(calendar);
        
        // Add tooltips if needed
        this.addTooltips();
      }
    },
    addTooltips() {
      // Add custom tooltip functionality if needed
      const days = this.$el.querySelectorAll('.ContributionCalendar-day');
      days.forEach(day => {
        day.title = day.dataset.count + ' contributions on ' + day.dataset.date;
      });
    }
  }
}

</script>

<style scoped>
>>> td.ContributionCalendar-day[data-level='0'] {
  @apply bg-gray-900;
}

>>> td.ContributionCalendar-day[data-level='1'] {
  background-color: rgb(14, 68, 41);
}

>>> td.ContributionCalendar-day[data-level='2'] {
  background-color: rgb(0, 109, 50);
}

>>> td.ContributionCalendar-day[data-level='3'] {
  background-color: rgb(38, 166, 65);
}

>>> td.ContributionCalendar-day[data-level='4'] {
  background-color: rgb(57, 211, 83);
}

>>> .ContributionCalendar-grid {
  border-spacing: 3px;
  border-collapse: separate;
}

>>> .ContributionCalendar-day {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.calendar {
  border: none;
}

.calendar >>> .width-full > .float-right {
  @apply text-sm text-gray-400 flex flex-row items-center justify-center px-4;
}

.calendar >>> .width-full > .float-right svg {
  @apply mx-0.5;
}


.calendar >>> .width-full > .float-left {
  @apply flex items-center justify-center;
}

.calendar >>> .width-full > .float-left a {
  @apply pl-8 text-sm text-gray-400 hover:text-indigo-500;
}

>>> text.ContributionCalendar-label {
  font-size: 9px;
  @apply text-gray-500;
}

>>> .contrib-column {
  @apply border-none;
}

>>> .contrib-number {
  @apply text-gray-200 font-bold;
}

>>> .text-muted {
  @apply text-gray-300;
}

/*@media (min-width: 768px) {*/
/*  .calendar {*/
/*    padding-right: 3rem !important;*/
/*  }*/
/*}*/

</style>
