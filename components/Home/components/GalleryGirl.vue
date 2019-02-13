<template>

  <a data-type="image" :href="baseUrl + photo.image.url">
    <div class="uk-background-cover uk-border-rounded item-gallery" :data-src="baseUrl + photo.image.url" uk-img>

    </div>

  </a>

</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      baseUrl : "",
    }
  },
  props: ['photo'],
  beforeMount(){
   this.baseUrl =  this.$axios.defaults.baseURL
  }
}
</script>

<style type="scss" scoped>

  .item-gallery{
    padding: 50%;
  }

</style>
