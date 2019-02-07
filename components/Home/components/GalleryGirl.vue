<template>

  <a data-type="image" :href="'http://localhost:1337' + photo.image.url">
    <div class="uk-background-cover uk-border-rounded item-gallery" :data-src="'http://localhost:1337' + photo.image.url" uk-img>

    </div>

  </a>

</template>

<script>
export default {
  props: ['photo']
}
</script>

<style type="scss" scoped>

  .item-gallery{
    padding: 50%;
  }

</style>
