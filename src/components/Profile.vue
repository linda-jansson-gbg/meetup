<template>
  <section>
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
        <p>{{ event.location }}</p>
      </span>
      <p class="description">{{ event.description }}</p>
      <button class="grey" @click="$emit('decline', event.id)">Decline</button>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    userEvents: Array,
  },
  methods: {
    setDate(int) {
      let now = new Date(int * Date.now());
      return now.toString().slice(0, 16);
    },
  },
  mounted() {},
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
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 2rem;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  border: none;
  background: #46858c;
  font-weight: bold;
  color: white;
  margin-top: auto;
  align-self: flex-end;
}
.yellow {
  color: #dead1d;
}
.grey {
  background: #8a8a8a;
}
.green {
  color: #46858c;
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
