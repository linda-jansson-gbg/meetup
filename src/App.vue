<template>
  <div id="app">
    <Menu :joined="joined" @changeView="changeView" :activeView="activeView" />
    <main>
      <Events
        v-if="activeView === 'events'"
        :joined="joined"
        :events="events"
        :activeSort="activeSort"
        @sort="handleSort"
        v-on:decline="handleDecline"
        v-on:join="handleJoin"
      />
      <Profile
        v-else-if="activeView === 'profile'"
        :userEvents="userEvents"
        :events="events"
        @decline="handleDecline"
        @changeView="changeView"
      />
      <PastEvents v-else-if="activeView === 'past'" @submitReview="addReview" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Events from './components/Events.vue';
import Menu from './components/Menu.vue';
import Profile from './components/Profile.vue';
import PastEvents from './components/PastEvents.vue';
import Footer from './components/Footer.vue';

import { createEvents } from './js/events';

export default {
  name: 'App',
  components: {
    Events,
    Menu,
    Profile,
    PastEvents,
    Footer,
  },
  data() {
    return {
      events: [],
      joined: [],
      activeView: 'events',
      activeSort: 'order',
      userEvents: [],
      searchEvents: [],
    };
  },
  mounted() {
    this.events = createEvents();
    const joined = localStorage.joinedEvents ?? '[]';
    this.joined = JSON.parse(joined);
    this.searchEvents = this.events;
  },
  methods: {
    handleJoin(id) {
      this.joined.push(id);
    },
    handleDecline(id) {
      this.joined.splice(this.joined.indexOf(id), 1);
    },
    changeView(view) {
      this.activeView = view;
    },
    addReview(eventReview) {
      console.log('review added', eventReview);
    },
    handleSort(sort) {
      this.activeSort = sort;
      if (sort === 'company') {
        this.searchEvents = this.searchEvents.sort((a, b) =>
          a.company > b.company ? 1 : b.company > a.company ? -1 : 0
        );
      } else if (sort === 'date') {
        this.searchEvents = this.searchEvents.sort((a, b) =>
          a.date > b.date ? 1 : b.date > a.date ? -1 : 0
        );
      } else if (sort === 'place') {
        this.searchEvents = this.searchEvents.sort((a, b) =>
          a.location > b.location ? 1 : b.location > a.location ? -1 : 0
        );
      } else {
        this.searchEvents = this.searchEvents.sort((a, b) =>
          a.id > b.id ? 1 : b.id > a.id ? -1 : 0
        );
      }
    },
  },
  watch: {
    joined() {
      localStorage.joinedEvents = JSON.stringify(this.joined);
      this.userEvents = [];
      this.events.forEach((event) => {
        if (this.joined.includes(event.id)) {
          this.userEvents.push({ ...event });
        }
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  height: 100vh;
  width: 100vw;
}
footer {
  height: 5rem;
  background: #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: 'Montserrat', sans-serif;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
article {
  padding: 1.5rem;
  background: #fff;
}
button {
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: #46858c;
  font-weight: bold;
  color: white;
}
.activeView {
  background-color: #4a4a4a;
}
.activeSort,
.activeFilter {
  background-color: #acd7c8;
}
h3 {
  font-weight: normal;
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
input,
textarea,
select {
  border: 1px solid #ccc;
  outline: none;
  padding: 0.5rem;
  margin: 0.5rem 0;
}
textarea {
  height: 5rem;
  width: 25rem;
}
select {
  background: none;
  width: 8rem;
}
.red {
  border: 1px solid red;
}
h1 {
  font-size: 1em;
}
</style>
