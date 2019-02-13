<template>

<div class="uk-container uk-container-large">

  <p class="section-header">Scorts</p>
  <h1>Mejor Calificadas</h1>

  <div class="uk-section uk-section-small">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true; autoplay-interval: 2000">

        <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-3@m uk-grid uk-grid-small uk-child-width-1-5@l" >
          <li v-for="girl in girls" >
            <GirlCard :girl="girl"></GirlCard>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  data() {
    return {
      girls: null,
      baseUrl: ''
    }
  },
  components: {
    GirlCard
  },
  beforeMount(){
         this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted() {



    axios
      .get( this.baseUrl + '/escorts', {
        params: {
          _sort: 'rating:desc',
          _limit: 10 // Generates http://localhost:1337/posts?_sort=createdAt:desc
        }
      })
      .then(response => {
        // Handle success.
        //console.log('Well done, here is the list of posts: ', response.data);
        this.girls = response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  },
}
</script>
