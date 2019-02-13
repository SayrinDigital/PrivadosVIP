<template>
<div>

<transition name="fade">
  <div key="1" class="preloader" v-if="isloading">
    <div class="uk-position-center">
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
  </div>

  <div key="2" v-else>
    <Header></Header>
    <HighlightGirls></HighlightGirls>

          <AdGroup :position="1"></AdGroup>


    <BestQualified></BestQualified>


        <AdGroup :position="2"></AdGroup>



    <section class="uk-section">
      <div class="uk-container uk-container-large">
        <div class="" uk-grid>
          <div class="uk-width-3-5@m">
            <div>
              <AllGirls></AllGirls>
            </div>
          </div>
          <div class="uk-width-2-5@m">
            <div id="highlightgirlcontainer" uk-sticky="bottom: true">
              <p class="section-header">Scorts</p>
              <h1>Destacadas</h1>
              <div>
                <HighlightGirlSlider></HighlightGirlSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        <AdGroup :position="3"></AdGroup>


    <JoinUs></JoinUs>

  </div>
</transition>



</div>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
import Header from '~/components/Home/Header.vue'
import HighlightGirls from '~/components/Home/HighlightGirls.vue'
import BestQualified from '~/components/Home/BestQualified.vue'
import AllGirls from '~/components/Home/AllGirls.vue'
import GirlCard from '~/components/Home/components/GirlCard.vue'
import JoinUs from '~/components/Home/JoinUs.vue'
import ModalGirl from '~/components/Home/components/ModalGirl.vue'
import HighlightGirlSlider from '~/components/Home/HighlightGirlSlider.vue'
import AdGroup from '~/components/Home/AdGroup.vue'

let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {
  transition: 'fade',
  head() {
    return {
      title: 'Privados VIP | Escorts En Chile',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Escorts en Chile desde la comodidad de tu hogar.'
      }]
    }
  },
  data() {
    return {
      adgroup: [],
      isloading: true,
      baseUrl: ""
    }
  },
  components: {
    AdGroup,
    Logo,
    Header,
    HighlightGirls,
    BestQualified,
    AllGirls,
    GirlCard,
    JoinUs,
    ModalGirl,
    HighlightGirlSlider,
  },
  beforeMount(){
     this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted() {

    this.$nextTick(function () {
        setTimeout(() => this.isloading = false, 1000)
  })

  },
  methods: {
    openmodal: function(){
     UIkit.modal(this.$refs.modalgirlcard).show()
   },
  }
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
