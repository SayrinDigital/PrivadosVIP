<template>

  <section class="uk-section">

    <div class="uk-container uk-container-large">
      <p class="section-header">Scorts</p>
      <h1>Resultados de Búsqueda: {{ searchterm }}</h1>

      <div class="uk-section uk-section-small">
        <div class="uk-child-width-1-5@l uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid" uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div > div; delay: 100;" uk-grid>
          <div v-for="girl in girls" >
            <GirlCard :girl="girl"></GirlCard>
          </div>
        </div>
      </div>
    </div>

    <ModalGirl :girl="null" ref="modalgirlcard"></ModalGirl>

  </section>

</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'
import ModalGirl from '~/components/Home/components/ModalGirl.vue'

export default {
  components:{
     GirlCard,
     ModalGirl
  },
  data(){
    return{
      girls: [],
     searchterm: " ",
     baseUrl: ""
    }
  },
  methods:{
     searchItems: function(){
       this.searchterm = this.$route.params.term
       axios
         .get(this.baseUrl + '/escorts', {
           params: {

              "location_contains": this.searchterm // Generates http://localhost:1337/posts?_sort=createdAt:desc
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
     }
  },
  beforeMount(){
    this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted(){
    this.searchItems()
  }
}
</script>
