<template>
  <section>
    <article v-for="(event, index) in pastEvents" :key="index">
      <h1>{{ event.name }}</h1>
      <p>{{ event.date }} {{ event.time }}</p>
      <p>id {{ event.id }}</p>
      <ul>
        <li v-for="(review, index) in event.reviews" :key="index">
          <i
            class="material-icons"
            v-for="(n, index) in review.rating"
            :key="index"
            >star_outline</i
          >
          {{ review.review }} {{ review.name }} {{ review.date }}
          {{ review.time }}
        </li>
      </ul>
      <ReviewForm
        v-if="event.reviews.length < 3"
        @submitReview="submitReview($event, event.id)"
      />
      <p v-if="showThanks" class="thanks">Thank you!</p>
    </article>
  </section>
</template>

<script>
import ReviewForm from '../components/ReviewForm.vue';
import { createPastEvents } from '../js/events';

export default {
  components: {
    ReviewForm,
  },
  data() {
    return {
      pastEvents: [],
      newPastEvents: [],
      showThanks: false,
    };
  },
  mounted() {
    if (localStorage.pastEvents) {
      try {
        this.pastEvents = JSON.parse(localStorage.getItem('pastEvents'));
      } catch (e) {
        localStorage.removeItem('pastEvents');
      }
    } else {
      this.pastEvents = createPastEvents();
      localStorage.pastEvents = JSON.stringify(this.pastEvents);
    }
  },
  methods: {
    submitReview(eventReview, id) {
      this.newPastEvents = JSON.parse(localStorage.pastEvents);
      this.newPastEvents[id].reviews.push(eventReview);
      localStorage.pastEvents = JSON.stringify(this.newPastEvents);
      this.showThanks = true;
      setTimeout(() => {
        this.showThanks = false;
      }, 2000);
    },
  },
  watch: {
    newPastEvents() {
      this.pastEvents = JSON.parse(localStorage.pastEvents);
    },
  },
};
</script>

<style>
textarea {
  height: 5rem;
}
p.thanks {
  animation-duration: 2s;
  animation-name: fadeout;
}

@keyframes fadeout {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
  75% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}
</style>
