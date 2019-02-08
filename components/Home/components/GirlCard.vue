<template>

  <a class="uk-display-block" @click="increment">
    <div v-if="girl">
      <div class="uk-position-relative   girl-card-container uk-inline uk-border-rounded uk-overflow-hidden">
        <img v-if="girl.profilephoto" :src="'http://localhost:1337' + girl.profilephoto.url" uk-img alt="">
        <div class="uk-overlay uk-position-cover gradient-overlay"></div>
        <div class="uk-overlay uk-position-bottom-left" v-if="girl.category">
          <p class="tag" ><span class="uk-margin-small-right" uk-icon="icon: star"></span>{{ girl.category.name }}</p>
          <h4 class="name">{{ girl.name }}</h4>
        </div>
      </div>
    </div>
  </a>

</template>

<script>

import ModalGirl from '~/components/Home/components/ModalGirl.vue'
let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {
  data (){
    return{
       modal: this.$refs.modalgirlcard,
       count: 0
    }
  },
  components: {
    ModalGirl
  },
  props: ['girl'],
  methods: {
    openModal: function(event){
     UIkit.modal(this.$refs.modalgirlcard).show()
   },
   increment() {
    this.count++;

    // $emit method will propagate count value to receiver components
    this.$nuxt.$emit('SHOWMODALGIRL', this.girl);
   }
  },
  mounted(){

  },
}
</script>
