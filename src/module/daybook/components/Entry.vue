<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: entry.id } })">
    <div class="entry-title d-flex">
      <span class="text-success ts-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fw-5">{{ month }}</span>
      <span class="mx-2 fw-light">{{ yearDay }}</span>
    </div>
    <div class="entry-description">
      {{ shorText }}....
    </div>
  </div>
</template>

<script>

import getDayMonthYear from '../helpers/getDayMonthYear.js'
export default {
  props: {
    entry: {
      type: Object,
      require: true
    }
  },

  computed: {
    shorText() {
      return (this.entry.text.length > 100)
        ? this.entry.text.substring(0, 100)
        : this.entry.text
    },
    day() {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date)
      return month
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date)
      return yearDay
    }
  }
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #35495E;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;

  }

  .entry-description {
    font-size: 12px;
  }
}
</style>