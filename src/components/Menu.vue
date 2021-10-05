<template>
  <header>
    <h1 @click="$emit('changeView', 'events')">JM</h1>
    <button @click="$emit('changeView', 'past')">Past events</button>
    <button @click="$emit('changeView', 'profile')">
      Upcoming events <i class="material-icons">today</i>
    </button>
    <p class="count">{{ joined.length }}</p>
  </header>
</template>

<script>
export default {
  props: {
    joined: Array,
  },
};
</script>

<style></style>
