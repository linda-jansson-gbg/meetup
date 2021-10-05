<template>
  <section>
    <p v-if="userEvents.length < 1">No events</p>
    <article v-for="event in userEvents" :key="event.id">
      <h1>{{ event.name }}</h1>
      <p>{{ event.company }}</p>
      <p>{{ event.description }}</p>
      <p>{{ event.date }} {{ event.time }}</p>
      <button @click="$emit('decline', event.id)">Decline</button>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    userEvents: Array,
  },
  mounted() {},
};
</script>

<style></style>
