<template>
  <header>
    <h1>JM</h1>
    <button>Past events</button>
    <button>Upcoming events <i class="material-icons">today</i></button>
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
