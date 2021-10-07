<template>
  <section>
    <h1>What did you think?</h1>
    <input
      v-on:blur="change"
      type="text"
      placeholder="Name"
      v-model="name"
    /><span v-if="nameMissing" class="error"> * your name is missing</span
    ><br />
    <textarea
      v-on:blur="change"
      type="text"
      placeholder="Review"
      v-model="review"
    /><span v-if="reviewMissing" class="error"> * your review is missing</span
    ><br />
    <label for="rating">Rating: </label><br />
    <!--<img src="../assets/star.svg" alt="" />-->
    <select v-on:blur="change" name="" id="rating" v-model.number="rating">
      <option value="1">★</option>
      <option value="2">★★</option>
      <option value="3">★★★</option>
      <option value="4">★★★★</option>
      <option value="5">★★★★★</option>
    </select>

    <button @click="submit">Submit</button>
    <span v-if="ratingMissing" class="error">
      * a rating would be appreciated</span
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      nameMissing: false,
      reviewMissing: false,
      ratingMissing: false,
    };
  },
  methods: {
    change(e) {
      let input = e.target.value.trim();
      if (input !== '') {
        e.target.classList.remove('red');
      } else {
        e.target.classList.add('red');
        e.target.value = '';
      }
    },
    submit() {
      if (this.name.trim() === '') {
        this.nameMissing = true;
        this.name = '';
      } else {
        this.nameMissing = false;
      }
      if (this.review.trim() === '') {
        this.reviewMissing = true;
        this.review = '';
      } else {
        this.reviewMissing = false;
      }
      if (this.rating === null) {
        this.ratingMissing = true;
      }
      if (
        this.name.trim() !== '' &&
        this.review.trim() !== '' &&
        this.rating !== null
      ) {
        let now = new Date(Date.now());
        let date = now.toString().slice(0, 16);
        let time = now.toString().slice(16, 21);
        let eventReview = {
          date: date,
          name: this.name,
          rating: this.rating,
          review: this.review,
          time: time,
          block: true,
        };
        this.$emit('submitReview', eventReview);
        this.name = '';
        this.review = '';
        this.rating = null;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 1rem 0 0.5rem;
}
.red {
  border: 1px solid #da2626;
}
.error {
  font-size: 0.9em;
  color: #da2626;
  display: block;
}
button {
  display: inline;
}
</style>
