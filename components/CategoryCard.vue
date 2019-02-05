<template>

  <div class="category-card hover-animation-move-up cursor-pointer uk-background-cover uk-position-relative uk-border-rounded uk-box-shadow-hover-medium" uk-img :data-src="category.cover">
    <div class="uk-overlay uk-position-cover gradient-overlay"></div>
    <div class="uk-overlay uk-position-bottom-left">
      <h4 class="name">{{ category.name }}</h4>
    </div>
  </div>

</template>

<script>
export default {
  props: ['category']
}
</script>

<style lang="scss" scoped>

  .category-card{
    padding: 50%;
  }

  .gradient-overlay{
    background: linear-gradient(to top, rgba(34,34,34,0.6) 0%, rgba(34,34,34,0.3) 35%, rgba(34,34,34,0) 100%);
  }

</style>
