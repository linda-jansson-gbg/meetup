<template>
  <div id="app">
    <section>
      <Menu :joined="joined" @changeView="changeView" />
      <Events
        v-if="activeView === 'events'"
        :joined="joined"
        :events="events"
        @join="handleJoin"
        @decline="handleDecline"
      />
      <Profile
        v-else-if="activeView === 'profile'"
        :userEvents="userEvents"
        :events="events"
        @decline="handleDecline"
      />
      <PastEvents v-else-if="activeView === 'past'" @submitReview="addReview" />
    </section>
  </div>
</template>

<script>
import Events from './components/Events.vue';
import Menu from './components/Menu.vue';
import Profile from './components/Profile.vue';
import PastEvents from './components/PastEvents.vue';
import { createEvents } from './js/events';

export default {
  name: 'App',
  components: {
    Events,
    Menu,
    Profile,
    PastEvents,
  },
  data() {
    return {
      events: [],
      joined: [],
      activeView: 'events',
      userEvents: [],
    };
  },
  mounted() {
    this.events = createEvents();
    const joined = localStorage.joinedEvents ?? '[]';
    this.joined = JSON.parse(joined);

    //this.pastEvents = createPastEvents();
    //const joined = localStorage.joinedEvents ?? '[]';
    //this.joined = JSON.parse(joined);
  },
  methods: {
    handleJoin(id) {
      this.joined.push(id);
    },
    handleDecline(id) {
      this.joined.splice(this.joined.indexOf(id), 1);
    },
    changeView(view) {
      this.activeView = view;
    },
    addReview(eventReview) {
      console.log('review added', eventReview);
    },
  },
  watch: {
    joined() {
      localStorage.joinedEvents = JSON.stringify(this.joined);

      this.userEvents = [];
      this.events.forEach((event, index) => {
        if (this.joined.includes(index)) {
          this.userEvents.push({ ...event, index });
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
