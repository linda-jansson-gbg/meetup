<template>
  <header>
    <img
      @click="$emit('changeView', 'events')"
      src="../assets/logo_yellow.svg"
      alt="JM"
    />
    <button
      :class="{ activeView: activeView === 'past' }"
      @click="$emit('changeView', 'past')"
    >
      Past events
    </button>
    <button
      :class="{ activeView: activeView === 'profile' }"
      @click="$emit('changeView', 'profile')"
    >
      Upcoming events:<span class="count">{{ joined.length }}</span>
    </button>
  </header>
</template>

<script>
export default {
  props: {
    joined: Array,
    activeView: String,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid #e4e4e4;
  position: sticky;
  top: 0;
  background: #fff;
  flex-wrap: wrap;
}
img {
  max-width: 4rem;
  margin-right: auto;
}
.count {
  margin-left: 0.5rem;
  color: #f2bf27;
}
</style>
