<template>
  <div id="app">
    <Menu :joined="joined" />
    <Events
      :joined="joined"
      :events="events"
      @join="handleJoin"
      @decline="handleDecline"
    />
  </div>
</template>

<script>
import Events from './components/Events.vue';
import Menu from './components/Menu.vue';
import { createEvents } from './js/events';

export default {
  name: 'App',
  components: {
    Events,
    Menu,
  },
  data() {
    return {
      events: [],
      joined: [],
    };
  },
  mounted() {
    this.events = createEvents();
    const joined = localStorage.joinedEvents ?? '[]';
    this.joined = JSON.parse(joined);
  },
  methods: {
    handleJoin(id) {
      this.joined.push(id);
    },
    handleDecline(id) {
      this.joined.splice(this.joined.indexOf(id), 1);
    },
  },
  watch: {
    joined() {
      localStorage.joinedEvents = JSON.stringify(this.joined);
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
