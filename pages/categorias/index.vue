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
          <div class="uk-width-3-5@m">
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
          </div>
        </div>

      <div class="uk-section">


        <div class="uk-section uk-section-small">
          <div >

            <h1>Selecciona Tu Categoría</h1>

        <div class="uk-section">
          <div uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 200" class="uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid-small" uk-grid>
            <div v-for="category in categories" v-bind:key="category.id">
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

import CategoryCard from '~/components/CategoryCard.vue'

export default {
  transition: 'fade',
  components :{
    CategoryCard
  },
  data(){
    return{
         categories : [
           { 'id' : 1, 'name' : 'VIP', 'cover' : 'https://images.unsplash.com/photo-1508386337243-4bebc7ec0ea9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80' },
           { 'id' : 2, 'name' : 'Premium', 'cover' : 'https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80' },
           { 'id' : 3, 'name' : 'GOLD', 'cover' : 'https://images.unsplash.com/photo-1502860372601-2a663136d5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1432&q=80' },
           { 'id' : 4, 'name' : 'Maduras', 'cover' : 'https://images.unsplash.com/photo-1515132292160-8ccaa03661f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
           { 'id' : 5, 'name' : 'Masajistas', 'cover' : 'https://images.unsplash.com/photo-1505676287926-c20025d6cb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' },
           { 'id' : 6, 'name' : 'Masajistas', 'cover' : 'https://images.unsplash.com/photo-1505516135770-ffd5e16648c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80' },
           { 'id' : 7, 'name' : 'Masajistas', 'cover' : 'https://images.unsplash.com/photo-1547513609-d80733850d2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80' },
           { 'id' : 8, 'name' : 'Masajistas', 'cover' : 'https://images.unsplash.com/photo-1518561602890-728830e35ed2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1264&q=80' },
         ]
    }
  }
}
</script>
