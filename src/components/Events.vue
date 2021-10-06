<template>
  <main>
    <div class="hero">
      <p>...join fake events where ever you are</p>
    </div>
    <div class="sort">
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'order' }"
        @click="$emit('sort', 'order')"
      >
        Order
      </button>
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'company' }"
        @click="$emit('sort', 'company')"
      >
        Company
      </button>
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'date' }"
        @click="
          $emit('sort', 'date');
          showFilter();
        "
      >
        Date
      </button>
      <button
        class="sort-btn place"
        :class="{ activeSort: activeSort === 'place' }"
        @click="$emit('sort', 'place')"
      >
        Place
      </button>
    </div>
    <section>
      <article v-for="event in events" :key="event.id">
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
        <p>{{ event.description }}</p>
        <button
          class="join-btn"
          v-if="!joined.includes(event.id)"
          @click="$emit('join', event.id)"
        >
          Attend
        </button>
        <button
          class="grey join-btn"
          v-else
          @click="$emit('decline', event.id)"
        >
          Decline
        </button>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Events',
  props: {
    events: Array,
    joined: Array,
    activeSort: String,
  },
  data() {
    return {
      //activeView: 'order',
    };
  },
  methods: {
    setDate(int) {
      let now = new Date(int * Date.now());
      return now.toString().slice(0, 16);
    },
    showFilter() {
      this.events.forEach((event) => {
        console.log(this.getMonth(event.date));
      });
    },
    getMonth(int) {
      let month = new Date(int * Date.now());
      return month.toString().slice(4, 7);
    },
  },
};
</script>

<style scoped>
section {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  background: #eeeeee;
}
article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 20rem;
}
div.hero {
  height: 30rem;
  background: #ffffff url('../assets/hero.svg') no-repeat center center;
  background-size: 80%;
  padding: 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.sort {
  padding: 1.5rem 0 0 0.5rem;
  background: #eeeeee;
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

button {
  margin-top: auto;
  align-self: flex-end;
}
@media only screen and (max-width: 1000px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 500px) {
  section {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
