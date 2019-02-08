<template>
<div class="uk-section">
  <div class="uk-container uk-container-large">

    <section class="uk-section uk-section-small">
      <div class="uk-container uk-container-large">
        <div class="" uk-grid>
          <div class="uk-width-3-5">
            <div>
              <AllGirls></AllGirls>
            </div>
          </div>
          <div class="uk-width-2-5">
            <div uk-scrollspy="cls:uk-animation-slide-bottom-small" id="highlightgirlcontainer" uk-sticky="bottom: true">
              <p class="section-header">Scorts</p>
              <h1>Destacadas</h1>

              <HighlightGirlSlider></HighlightGirlSlider>

            </div>
          </div>
        </div>
      </div>
    </section>

    <ModalGirl :girl="null" ref="modalgirlcard"></ModalGirl>

  </div>
</div>
</template>

<script>
import AllGirls from '~/components/Home/AllGirls.vue'
import GirlCard from '~/components/Home/components/GirlCard.vue'
import ModalGirl from '~/components/Home/components/ModalGirl.vue'
import HighlightGirlSlider from '~/components/Home/HighlightGirlSlider.vue'

export default {
  transition: 'fade',
  head() {
    return {
      title: 'Chicas | Privados VIP | Escorts En Chile',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Da una visita a todas las chicas disponibles en Privados VIP, las mejores escorts en Chile desde la comodidad de tu hogar.'
      }]
    }
  },
  data() {
    return {
      girl: null,
          isloading : true
    }
  },
  components: {
    AllGirls,
    GirlCard,
    ModalGirl,
    HighlightGirlSlider
  },
  mounted(){
    this.isloading = false
  }
}
</script>
