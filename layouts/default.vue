<template>
<div>
  <div v-if="isloading == false" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: active-sticky; cls-inactive: uk-navbar-transparent; top: 200">
    <nav class="uk-navbar-container uk-position-relative uk-navbar-transparent" id="mainnav" uk-navbar="mode: click">

      <div class="uk-navbar-left">
        <nuxt-link class="uk-navbar-item uk-logo" to="/"><span class="text-highlight">PrivadosVIP {{ $store.state.role }}</span></nuxt-link>
      </div>

      <div class="uk-navbar-right">

        <div class="uk-navbar-item  uk-visible@s">
          <div>
            <a class="uk-navbar-toggle" uk-search-icon href="#"></a>
            <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
              <form v-on:submit.prevent class="uk-search uk-search-navbar">
                <div class="uk-display-inline-block uk-dark">
                  <div class="uk-form-controls">
                    <select v-model="selecttosearch" class="uk-select">
                      <option disabled value="">Elegir Término</option>
                      <option value="name">Nombre</option>
                      <option value="location">Ubicación</option>
                    </select>
                  </div>
                </div>
                <div class="uk-display-inline-block">
                  <input v-on:keyup.enter="searchsubmit" v-model="search" class="uk-search-input" type="search" placeholder="Buscar..." autofocus>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="uk-navbar-item uk-visible@m">
          <nuxt-link to="/" class="uk-button-text">Inicio</nuxt-link>
        </div>

        <div class="uk-navbar-item uk-visible@m">
          <nuxt-link to="/chicas" class="uk-button-text">Nuestras Chicas</nuxt-link>
        </div>

        <div class="uk-navbar-item uk-visible@m">
          <nuxt-link to="/categorias" class="uk-button-text">Categorías</nuxt-link>
        </div>

        <div class="uk-navbar-item">
          <nuxt-link to="/login" tag="button" class="uk-button red-button"> Iniciar Sesión </nuxt-link>
        </div>

      </div>

    </nav>
  </div>
  <nuxt />

  <footer v-if="isloading == false" uk-scrollspy="cls:uk-animation-fade" class="uk-background-cover uk-position-relative" uk-img data-src="https://images.unsplash.com/photo-1534125804993-544a1148a064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80">
    <div class="gradient-overlay uk-position-cover"></div>
    <div class="uk-container uk-container-large uk-position-relative">
      <div class="uk-section uk-section-large">
        <div uk-scrollspy="cls: uk-animation-fade; target: >  *; delay: 200" uk-grid class="uk-grid-large uk-child-width-1-2@s">
          <div>
            <div>
              <h3 class="text-highlight">Privados VIP</h3>
              <p class="uk-width-large@m light">Portal para visitantes y clientes anunciantes mayores de 18 años.PrivadosVIP.cl NO ES UNA AGENCIA y no se responsabiliza por el servicio de las escorts. Todas las fotografías son certificadas y
                verificadas como reales antes de ser publicadas.Nuestro portal se reserva el derecho de publicación.Privados VIP.cl presta el servicio de publicación y asesoría gráfica.</p>
            </div>
          </div>
          <div>
            <div>
              <div uk-scrollspy="cls: uk-animation-fade; target: >  *; delay: 200" class="uk-child-width-expand@s" uk-grid>

                <div v-if="categories">
                  <h4>Categorías</h4>
                  <ul class="uk-list uk-list-large">
                    <li v-for="category in categories">
                      <nuxt-link :to="'/categorias/' + category.id ">{{ category.name }}</nuxt-link>
                    </li>
                  </ul>
                </div>

                <!--<div>
                  <h4>Empresa</h4>
                  <ul class="uk-list uk-list-large">
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>
                  </ul>
                </div>-->

                <div>
                  <h4>Links de Interés</h4>
                  <ul class="uk-list uk-list-large">
                    <li><nuxt-link to="/glosario">Glosario</nuxt-link></li>
                    <!--<li><a href="">Category</a></li>
                    <li><a href="">Category</a></li>-->
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="uk-section uk-section-small">
        <div class="uk-align-right">
          <ul class="uk-iconnav">
            <li><a href="#" uk-icon="icon: facebook"></a></li>
            <li><a href="#" uk-icon="icon: instagram"></a></li>
            <li><a href="#" uk-icon="icon: twitter"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isloading: true,
      search: "",
      categories: [],
      selecttosearch: "",

    }
  },
  methods: {
    searchsubmit: function() {
      switch (this.selecttosearch) {
        case 'name':
              this.$router.push("/busqueda/" + this.search);
          break;

        case 'location':
              this.$router.push("/busqueda/ubicacion/" + this.search);
          break;

        default:
      this.$router.push("/busqueda/" + this.search);
      }

    },
    loadCategories: function() {
      axios
        .get('http://localhost:1337/categories', {
          params: {
            _sort: 'name:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.categories = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  },
  mounted() {
    this.isloading = false
    this.loadCategories()

  }

}
</script>
