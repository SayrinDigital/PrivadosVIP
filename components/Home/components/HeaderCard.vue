<template>

  <header>
    <div class="uk-inline uk-position-cover">
      <div class="uk-background-cover uk-position-cover" uk-img :data-src="baseUrl + header.cover.url"></div>

      <div class="uk-position-cover gradient-overlay">

      </div>
            <div class="uk-overlay uk-position-bottom-right">
              <div class="">
                <div class="uk-text-right">
                  <h1 class="text-highlight text-responsive uk-width-large@m" uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">{{ header.title }}</h1>
                  <h3 uk-slideshow-parallax="y: -50,0,0; opacity: 1,1,0">{{ header.subtitle }}</h3>
                  <p class="uk-width-large@s uk-margin-remove uk-padding-remove" uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">{{ header.description }}</p>
                  <a class="uk-button uk-button-text" :href="header.linkto" uk-slideshow-parallax="y: 50,0,0; opacity: 1,1,0">Leer Más</a>
                </div>
              </div>
            </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
        baseUrl : "",
    }
  },
  mounted(){
   this.baseUrl =  this.$axios.defaults.baseURL
  },
  props: ['header']
}
</script>
