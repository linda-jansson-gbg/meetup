<template>
  <section>
    <p>What did you think?</p>
    <input
      v-on:blur="change"
      type="text"
      placeholder="Name"
      v-model="name"
    /><br />
    <textarea
      v-on:blur="change"
      type="text"
      placeholder="Review"
      v-model="review"
    /><br />
    <label for="rating">Rating:</label>
    <!--<img src="../assets/star.svg" alt="" />-->
    <select v-on:blur="change" name="" id="rating" v-model.number="rating">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="submit">Submit</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      review: '',
      rating: null,
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
      if (this.name !== '' && this.review !== '' && this.rating !== null) {
        this.$emit('submitReview', eventReview);
        this.name = '';
        this.review = '';
        this.rating = null;
      }
    },
  },
};
</script>

<style>
input,
textarea,
select,
button {
  border: 1px solid #ccc;
  outline: none;
}
.red {
  border: 1px solid red;
}
</style>
