<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:10}})"
  >
    <div class="entry-title d-flex">
      <span class="text-success ts-5 fw-bold">15</span>
      <span class="mx-1 fw-5">julio</span>
      <span class="mx-2 fw-light">2023,Viernes</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod
      mollitia tenetur consectetur enim porro doloribus illum aut molestias.
      Natus minus labore illo ipsa exercitationem recusandae numquam quos
      repellendus neque!
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #35495E ;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;

    }
    .entry-description{
        font-size: 12px;
    }
}
</style>