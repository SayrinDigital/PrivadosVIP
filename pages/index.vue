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
    <BestQualified></BestQualified>


    <section class="uk-section">
      <div class="uk-container uk-container-large">
        <div class="" uk-grid>
          <div class="uk-width-3-5">
            <div>
              <AllGirls></AllGirls>
            </div>
          </div>
          <div class="uk-width-2-5">
            <div id="highlightgirlcontainer" uk-sticky="bottom: true">
              <p class="section-header">Scorts</p>
              <h1>Destacadas</h1>
              <div class="uk-section uk-section-small">
                <!--<GirlCard :girl="girl"></GirlCard>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <JoinUs></JoinUs>
    <button @click="openmodal">open</button>
    <ModalGirl :girl="null" ref="modalgirlcard"></ModalGirl>
  </div>
</transition>

</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '~/components/Home/Header.vue'
import HighlightGirls from '~/components/Home/HighlightGirls.vue'
import BestQualified from '~/components/Home/BestQualified.vue'
import AllGirls from '~/components/Home/AllGirls.vue'
import GirlCard from '~/components/Home/components/GirlCard.vue'
import JoinUs from '~/components/Home/JoinUs.vue'
import ModalGirl from '~/components/Home/components/ModalGirl.vue'

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
      girl: {
        "id" : 2,
        "name": "Carmen",
        "cover" : "https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80"
      },
      isloading: true
    }
  },
  components: {
    Logo,
    Header,
    HighlightGirls,
    BestQualified,
    AllGirls,
    GirlCard,
    JoinUs,
    ModalGirl
  },
  mounted() {
    setTimeout(() => this.isloading = false, 1000)
  },
  methods: {
    openmodal: function(){
     UIkit.modal(this.$refs.modalgirlcard).show()
    }
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
