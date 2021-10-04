<template>
  <div class="hello">
    <article v-for="event in events" :key="event.id">
      <h1>{{ event.name }}</h1>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Events',
  props: {
    events: Array,
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
