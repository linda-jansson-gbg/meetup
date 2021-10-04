<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Events :events="events" />
  </div>
</template>

<script>
import Events from './components/Events.vue';
import { createEvents } from './js/events';

export default {
  name: 'App',
  components: {
    Events,
  },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.events = createEvents();
    console.log(this.events);
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
