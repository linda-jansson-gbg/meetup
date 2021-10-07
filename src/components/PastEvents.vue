<template>
  <main>
    <article v-for="(event, index) in pastEvents" :key="index">
      <span class="yellow">
        <i class="material-icons">today</i>
        <p>{{ event.date + event.time }}</p>
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
      <h1 @click="showReview = !showReview" class="reviews">
        {{ showReview ? 'Hide reviews' : 'Show reviews' }}
      </h1>
      <div v-if="showReview">
        <div
          class="review"
          v-for="(review, index) in event.reviews"
          :key="index"
        >
          <i
            v-for="(n, index) in review.rating"
            :key="index + 'a'"
            class="material-icons stars"
            >star</i
          >
          <i
            v-for="(n, index) in 5 - review.rating"
            :key="index + 'b'"
            class="material-icons stars"
            >star_outline</i
          >
          <span class="green"
            >Says: {{ review.name }} at: {{ review.time }}
            {{ review.date }}</span
          >
          <p>{{ review.review }}</p>
        </div>

        <ReviewForm
          v-if="event.reviews.length < 3"
          @submitReview="submitReview($event, event.id)"
        />
        <h1 v-if="showThanks" class="thanks">Thank you for your feedback!</h1>
      </div>
    </article>
  </main>
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
      showReview: false,
      index: 0,
      address: 'https://www.google.com/maps/search/?api=1&query=',
      city: '+Göteborg',
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
      }, 3000);
    },
    showReviews() {
      this.showReviews;
    },
  },
  watch: {
    newPastEvents() {
      this.pastEvents = JSON.parse(localStorage.pastEvents);
    },
  },
};
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 15rem;
  border-bottom: 1px solid #e4e4e4;
}
h1.reviews {
  padding: 2rem 0 0.5rem;
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding: 1rem;
}
.stars {
  color: #dead1d;
}
.description {
  max-width: 40rem;
}
h1.thanks {
  margin-top: 1rem;
}
span {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.5rem;
}
span i {
  margin-right: 0.3rem;
}
.review {
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
  padding: 0.5rem 0 1rem 0;
}
</style>
