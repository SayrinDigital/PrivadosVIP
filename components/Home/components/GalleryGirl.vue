<template>

  <a data-type="image" :href="'http://localhost:1337' + photo.image.url">
    <img class="uk-border-rounded" uk-img :src="'http://localhost:1337' + photo.image.url" alt="">
  </a>

</template>

<script>
export default {
  props: ['photo']
}
</script>
