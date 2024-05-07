<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h1>Demo Calendar</h1>
      <v-btn @click="handleDateClick">Add Event</v-btn>
      <FullCalendar :options="calendarOptions" />
      <template>
        <div class="text-center pa-4">
          <v-dialog v-model="dialog" width="auto">
            <v-card
              max-width="600"
              prepend-icon="mdi-calendar-check"
              text="Please fill in the required information to create a new appointment."
              title="New Appointment"
            >
              <v-container>
                <v-row>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="editedItem.date"
                      label="Date"
                      type="datetime-local"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="editedItem.patient"
                      label="Patient Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="editedItem.location"
                      label="Location"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="12">
                    <v-text-field
                      v-model="editedItem.doctor"
                      label="Doctor"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <template v-slot:actions>
                <v-btn
                  class="ms-auto"
                  color="blue-darken-1"
                  variant="elevated"
                  text="Create"
                  @click="addEvent"
                ></v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </div>
  </template>
  
  <script>
  import FullCalendar from "@fullcalendar/vue3"
  import dayGridPlugin from "@fullcalendar/daygrid"
  import interactionPlugin from "@fullcalendar/interaction" // for selectable
  import eventData from "../events.json"
  
  export default {
    components: {
      FullCalendar,
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin],
          initialView: "dayGridMonth",
          // selectable: true,
          events: [], // Empty array for no initial events
          // dateClick: this.handleDateClick,
        },
        dialog: false,
        editedItem: {
          title: "",
          date: "",
          patient: "",
          location: "",
          doctor: "",
        },
        defaultITem: {
          title: "",
          date: "",
          patient: "",
          location: "",
          doctor: "",
        },
      }
    },
    mounted() {
      // Load event data from the imported JSON file
      this.calendarOptions.events = eventData
    },
    methods: {
      addEvent() {
        // Generate a new event and push it to the events array
        this.calendarOptions.events.push({
          title: "New Event",
          date: this.editedItem.date, // Use current date as start
          // allDay: true, // Set allDay to true for all-day event
        })
        this.dialog = false
      },
      handleDateClick() {
        // console.log(info.dateStr)
        // this.editedItem.date = info.dateStr
        this.dialog = true
      },
    },
  }
  </script>
  

<!-- <template>
    <div>
      <h1>Demo App</h1>
      <button @click="addEvent">Add Event</button>
      <FullCalendar :options="calendarOptions" />
    </div>
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import eventData from '../events.json'
  
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
    },
    mounted() {
        // Load event data from the imported JSON file
        this.calendarOptions.events = eventData;
    },
    methods: {
    addEvent() {
      // Generate a new event and push it to the events array
      this.calendarOptions.events.push({
        title: 'New Event',
        start: new Date(), // Use current date as start
        end: new Date(), // Use current date as end
        allDay: true, // Set allDay to true for all-day event
        color: 'blue'
      });
    }
  }
  };
  </script>
   -->