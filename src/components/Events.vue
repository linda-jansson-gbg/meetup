<template>
  <main>
    <div class="hero">
      <p>...join fake events where ever you are</p>
    </div>
    <div class="sort">
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'order' }"
        @click="
          $emit('sort', 'order');
          showFilter = false;
          showFilteredEvents = false;
          activeFilter = '';
        "
      >
        Order
      </button>
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'company' }"
        @click="
          $emit('sort', 'company');
          showFilter = false;
          showFilteredEvents = false;
          activeFilter = '';
        "
      >
        Company
      </button>
      <button
        class="sort-btn"
        :class="{ activeSort: activeSort === 'date' }"
        @click="
          $emit('sort', 'date');
          showFilteredEvents = false;
          setFilter();
          activeFilter = '';
        "
      >
        Date
      </button>
      <button
        class="sort-btn place"
        :class="{ activeSort: activeSort === 'place' }"
        @click="
          $emit('sort', 'place');
          showFilter = false;
          showFilteredEvents = false;
          activeFilter = '';
        "
      >
        Place
      </button>
    </div>
    <div v-if="showFilter" class="filter">
      <button
        class="sort-btn"
        :class="{ activeFilter: activeFilter === 'thismonth' }"
        @click="
          filterEvents('thismonth');
          showFilteredEvents = true;
        "
      >
        This month
      </button>
      <button
        class="sort-btn"
        :class="{ activeFilter: activeFilter === 'nextmonth' }"
        @click="
          filterEvents('nextmonth');
          showFilteredEvents = true;
        "
      >
        Next month
      </button>
      <button
        class="sort-btn"
        :class="{ activeFilter: activeFilter === 'later' }"
        @click="
          filterEvents('later');
          showFilteredEvents = true;
        "
      >
        Later
      </button>
    </div>
    <FilterEvents
      v-if="showFilteredEvents"
      :events="filteredEvents"
      :joined="joined"
      v-on="$listeners"
    />
    <section v-if="!showFilteredEvents">
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
import FilterEvents from '../components/FilterEvents.vue';
export default {
  name: 'Events',
  components: {
    FilterEvents,
  },
  props: {
    events: Array,
    joined: Array,
    activeSort: String,
  },
  data() {
    return {
      showFilter: false,
      showFilteredEvents: false,
      filteredEvents: [],
      activeFilter: '',
    };
  },
  methods: {
    month(int) {
      // Returns the month in number format. Int is an integer in the event array.
      // Set int to 1 to return the current month
      let now = new Date(int * Date.now());
      return now.getMonth();
    },
    setFilter() {
      // Show or hide the filter buttons
      this.showFilter = !this.showFilter;
    },
    setDate(int) {
      // Returns the day, month and year. Int is an integer in the event array
      let futureDate = new Date(int * Date.now());
      return futureDate.toString().slice(0, 16);
    },
    filterEvents(when) {
      this.filteredEvents = [];
      this.activeFilter = when;
      this.events.forEach((event) => {
        if (when === 'thismonth') {
          if (this.month(event.date) === this.month(1))
            this.filteredEvents.push(event);
        } else if (when === 'nextmonth') {
          if (this.month(event.date) === this.month(1) + 1)
            this.filteredEvents.push(event);
        } else {
          if (
            this.month(event.date) > this.month(1) + 1 ||
            this.month(event.date) < this.month(1)
          )
            this.filteredEvents.push(event);
        }
      });
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
.sort,
.filter {
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
