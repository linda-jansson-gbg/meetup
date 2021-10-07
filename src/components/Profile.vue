<template>
  <main>
    <div class="profile" v-if="userEvents.length < 1">
      <h1>
        No events planned.
        <span @click="$emit('changeView', 'events')" class="green"
          ><u>Find an event</u></span
        >
      </h1>
    </div>
    <div class="profile" v-else>
      <h1>Your upcoming events</h1>
    </div>
    <article v-for="event in userEvents" :key="event.id">
      <span class="yellow">
        <i class="material-icons">today</i>
        <p>{{ setDate(event.date) + event.time }}</p>
      </span>
      <h1>{{ event.name }}</h1>
      <i>by: {{ event.company }}</i>
      <span class="green">
        <i class="material-icons">location_on</i>
        <a
          class="green"
          :href="address + event.location + city"
          target="_blank"
          >{{ event.location }}</a
        >
      </span>
      <p class="description">{{ event.description }}</p>
      <button class="grey" @click="$emit('decline', event.id)">Decline</button>
    </article>
  </main>
</template>

<script>
export default {
  props: {
    userEvents: Array,
  },
  data() {
    return {
      address: 'https://www.google.com/maps/search/?api=1&query=',
      city: '+Göteborg',
    };
  },
  methods: {
    setDate(int) {
      let now = new Date(int * Date.now());
      return now.toString().slice(0, 16);
    },
  },
};
</script>

<style scoped>
section {
  background: #eeeeee;
}
article {
  padding: 1.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 15rem;
  border-bottom: 1px solid #e4e4e4;
}
.profile {
  padding: 1.5rem;
  display: flex;
}
button {
  margin-top: auto;
  align-self: flex-end;
}
h1 span u {
  cursor: pointer;
}
.description {
  max-width: 40rem;
}
span {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
}
span i {
  margin-right: 0.3rem;
}
@media only screen and (max-width: 768px) {
  .description {
    margin-bottom: 2rem;
  }
}
</style>
