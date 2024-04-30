<template>
    <div>
      <h1>Demo App</h1>
      <FullCalendar :options="calendarOptions" />
    </div>
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  
  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          events: [] // Empty array for no initial events
        }
      };
    }
  };
  </script>
  