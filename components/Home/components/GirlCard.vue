<template>
<div>
  <a class="uk-display-block hover-animation-move-up " v-on:click="openModal">
    <div>
      <div class="uk-position-relative girl-card-container uk-inline uk-border-rounded uk-overflow-hidden">
        <img :src="girl.cover" alt="">
        <div class="uk-overlay uk-position-cover gradient-overlay"></div>
        <div class="uk-overlay uk-position-bottom-left">
          <p class="tag"><span class="uk-margin-small-right" uk-icon="icon: star"></span>VIP</p>
          <h4 class="name">{{ girl.name }}</h4>
        </div>
      </div>
    </div>
  </a>

  <div  class="uk-modal-container" ref="modalgirlcard" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <ModalGirl :girl="girl"></ModalGirl>
    </div>
  </div>
</div>
</template>

<script>

import ModalGirl from '~/components/Home/components/ModalGirl.vue'
let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {
  name : 'owo',
  data (){
    return{
       modal: this.$refs.modalgirlcard
    }
  },
  components: {
    ModalGirl
  },
  props: ['girl'],
  methods: {
    openModal: function(event){
     UIkit.modal(this.$refs.modalgirlcard).show()
    }
  }
}
</script>
