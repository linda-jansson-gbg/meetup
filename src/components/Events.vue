<template>
  <div class="hello">
    <article v-for="event in events" :key="event.id">
      <h1>{{ event.name }}</h1>
      <h2>{{ event.company }}</h2>
      <p>{{ event.description }}</p>
      <p>{{ event.location }}</p>
      <p>{{ setDate(event.date) + event.time }}</p>
      <button
        v-if="!joined.includes(event.id)"
        @click="$emit('join', event.id)"
      >
        Attend
      </button>
      <button v-else @click="$emit('decline', event.id)">Decline</button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Events',
  props: {
    events: Array,
    joined: Array,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    setDate(int) {
      const date = new Date(int * Date.now());
      return date.toUTCString().slice(0, 17);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
