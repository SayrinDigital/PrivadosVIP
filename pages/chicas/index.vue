<template>
<div class="uk-section">
  <div class="uk-container uk-container-large">
    <div v-if="isloading == false" >
        <h1 class="light">Filtrar Búsqueda</h1>

        <div uk-scrollspy="cls: uk-animation-fade; target: > div > button; delay: 200; repeat: true" class="uk-section uk-section-small">
          <div uk-form-custom="target: > * > span:first-child">
            <select>
              <option value="">Todas</option>
              <option value="1">Option 01</option>
              <option value="2">Option 02</option>
              <option value="3">Option 03</option>
              <option value="4">Option 04</option>
            </select>
            <button class="uk-button" type="button" tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>

          <div uk-form-custom="target: > * > span:first-child">
            <select>
              <option value="">Contextura</option>
              <option value="1">Option 01</option>
              <option value="2">Option 02</option>
              <option value="3">Option 03</option>
              <option value="4">Option 04</option>
            </select>
            <button class="uk-button" type="button" tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>

          <div uk-form-custom="target: > * > span:first-child">
            <select>
              <option value="">Edad</option>
              <option value="1">Option 01</option>
              <option value="2">Option 02</option>
              <option value="3">Option 03</option>
              <option value="4">Option 04</option>
            </select>
            <button class="uk-button" type="button" tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
            </button>
          </div>
        </div>
    </div>
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
