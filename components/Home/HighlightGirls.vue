<template>
<section class="uk-section">

  <div class="uk-container uk-container-large">
    <p class="section-header">Scorts</p>
    <h1>Destacadas</h1>

    <div class="uk-section uk-section-small">
      <div class="uk-child-width-1-5@l uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-3 uk-grid-small" uk-grid uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div > a; delay: 100;">
        <div  v-for="girl in girls" >
          <GirlCard :girl="girl"></GirlCard>
        </div>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  data() {
    return {
      girls: null,
          baseUrl : ""
    }
  },
  components: {
    GirlCard
  },
  beforeMount(){
    this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted() {
    this.loadPremiumCategoryId()
  },
  methods: {
    loadPremiumCategoryId: function(){
      axios
        .get(this.baseUrl + '/categories', {
          params: {
            "name": 'Premium',
            _limit: 1 // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          var id = response.data[0].id
          this.loadPremiumGirls(id)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadPremiumGirls: function(id){
      axios
        .get(this.baseUrl + '/escorts', {
          params: {
            "category": id,
            _limit: 10 // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.girls = response.data
          this.girls.sort((a, b) => Math.random() > .5 ? -1 : 1);
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  }
}
</script>
