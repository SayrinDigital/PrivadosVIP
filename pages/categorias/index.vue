<template>

  <section class="uk-section">

    <div class="uk-container uk-container-large">


        <div class="uk-flex uk-flex-middle" uk-grid>
          <div class="uk-width-2-5@m">
            <div>
              <div class="uk-position-relative">
                <div class="back-text">Scorts</div>
               <div class="uk-position-relative">
                 <p class="section-header">Scorts</p>
                 <h1>Categorías</h1>
                 <p class="uk-width-large@m">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla velit dicta temporibus deserunt, earum
                  laboriosam maiores tempora excepturi adipisci ullam assumenda repudiandae nostrum, incidunt dolor quibusdam qui, recusandae veniam aliquid.</p>
               </div>
              </div>
            </div>
          </div>
          <!--<div class="uk-width-3-5@m">
            <div uk-slideshow="animation: push; ratio: false; autoplay: true">
              <ul class="uk-slideshow-items uk-height-large">
                <li>
                  <div class="uk-height-large uk-border-rounded uk-box-shadow-hover-large uk-background-cover uk-position-relative girl-card-container" uk-img data-src="https://images.unsplash.com/photo-1530555328699-3ac77bc66854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" >
                    <div class="uk-overlay uk-position-cover gradient-overlay"></div>
                    <div class="uk-overlay uk-position-bottom-left">
                      <p class="tag"><span class="uk-margin-small-right" uk-icon="icon: star"></span>VIP</p>
                      <h4 class="name">Anunciando Nuevo Producto Lanzado</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-height-large uk-border-rounded uk-box-shadow-hover-large uk-background-cover uk-position-relative girl-card-container" uk-img data-src="https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80" >
                    <div class="uk-overlay uk-position-cover gradient-overlay"></div>
                    <div class="uk-overlay uk-position-bottom-left">
                      <p class="tag"><span class="uk-margin-small-right" uk-icon="icon: star"></span>VIP</p>
                      <h4 class="name">Anunciando Nuevo Producto Lanzado</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-height-large uk-border-rounded uk-box-shadow-hover-large uk-background-cover uk-position-relative girl-card-container" uk-img data-src="https://images.unsplash.com/photo-1518745310004-5b2a118cfd75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80" >
                    <div class="uk-overlay uk-position-cover gradient-overlay"></div>
                    <div class="uk-overlay uk-position-bottom-left">
                      <p class="tag"><span class="uk-margin-small-right" uk-icon="icon: star"></span>VIP</p>
                      <h4 class="name">Anunciando Nuevo Producto Lanzado</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>-->
        </div>

      <div class="uk-section">


        <div class="uk-section uk-section-small">
          <div >

            <h1>Selecciona Tu Categoría</h1>

        <div class="uk-section">
          <div uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 200" class="uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid-small uk-grid" uk-grid>
            <div v-for="category in categories"  v-if="category.cover"  v-bind:key="category.id">
                <CategoryCard :category="category"></CategoryCard>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>

    </div>

  </section>

</template>

<script>

import axios from 'axios'
import CategoryCard from '~/components/CategoryCard.vue'

export default {
  auth: false,
  transition: 'fade',
  components :{
    CategoryCard
  },
  data(){
    return{
         categories : [],
         baseUrl: ""
    }
  },
  beforeMount(){
     this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted() {
    axios
      .get(this.baseUrl + '/categories', {
        params: {
          _sort: 'name:desc'
        }
      })
      .then(response => {
        // Handle success.
        this.categories = response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  },
}
</script>
