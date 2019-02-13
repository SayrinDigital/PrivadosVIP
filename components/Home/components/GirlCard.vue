<template>

  <a class="uk-display-block" @click="openModalGirl">
    <div v-if="girl" class="girl-card">
      <div class="uk-position-relative   girl-card-container uk-inline uk-border-rounded uk-overflow-hidden">
        <img v-if="girl.profilephoto" :src="baseUrl + girl.profilephoto.url" uk-img alt="">
        <div class="uk-overlay uk-position-cover gradient-overlay"></div>
        <div class="uk-overlay container-overlay uk-position-bottom-left" v-if="girl.category">
          <p class="tag" ><span class="uk-margin-small-right" uk-icon="icon: star"></span>{{ girl.category.name }}</p>
          <h4 class="name">{{ girl.name }}</h4>
        </div>
      </div>
    </div>
  </a>

</template>

<script>
import axios from 'axios'
let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {
  data (){
    return{
       baseUrl: ""
    }
  },
  components: {

  },
  props: ['girl'],
  methods: {
   openModal() {
    // $emit method will propagate count value to receiver components
    this.$nuxt.$emit('SHOWMODALGIRL', this.girl);
  },
  openModalGirl: function(){
   this.$modal.show('modal-girl-card', { girl: this.girl })
  }
  },
  mounted(){
     this.baseUrl =  this.$axios.defaults.baseURL
  }
}
</script>
