<template>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <div v-if="category">
            <p class="section-header">Categorías</p>
            <h1>{{ category.name }}</h1>

            <div v-if="girls" class="uk-section uk-section-small">
              <div class="uk-child-width-1-5@l uk-child-width-1-2@m uk-child-width-1-1 uk-grid-small" uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div > div; delay: 100;" uk-grid>
                <div v-for="girl in girls">
                  <GirlCard :girl="girl"></GirlCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalGirl :girl="null" ref="modalgirlcard"></ModalGirl>
      </div>
</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'
import ModalGirl from '~/components/Home/components/ModalGirl.vue'

export default {
transition: 'fade',
components:{
  GirlCard,
  ModalGirl
},
  data(){
    return{
      id: null,
      category: null,
      girls: [],
      isloading : true,
      baseUrl : ''
    }
  },
  beforeMount(){
    this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted(){
    this.id = this.$route.params.id

    axios
      .get(this.baseUrl + '/categories/' + this.id)
      .then(response => {
        // Handle success.
        //console.log('Well done, here is the list of posts: ', response.data);
        this.category = response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });

    axios
      .get(this.baseUrl + '/escorts/',{
        params:{
          'category' : this.id
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

      this.isloading = false
  },



}
</script>

<style type="scss" scoped>

.preloader {
  width: 100vw;
  height: 100vh;
  background: #222;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
