<template>
<div>
  <div v-if="girl" class="uk-container uk-container-large">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item">
          <div v-if="girl.profilephoto" class="uk-inline-clip uk-transition-toggle uk-border-rounded uk-background-cover photo-container" uk-img :data-src="baseUrl + girl.profilephoto.url">
            <div class="say uk-transition-slide-bottom uk-position-bottom uk-light">
              <div>
                <div class="js-upload" uk-form-custom>
                  <input type="file" @change="onProfilePhotoFileChange">
                  <button class="uk-button uk-button-default" type="button" tabindex="-1">Subir</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="uk-inline-clip uk-transition-toggle photo-container uk-border-rounded">
            <div class="say uk-transition-slide-bottom uk-position-bottom uk-light">
              <div>
                <div class="js-upload" uk-form-custom>
                  <input type="file" @change="onProfilePhotoFileChange">

                  <button class="uk-button uk-button-default" type="button" tabindex="-1">Subir</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="uk-navbar-item uk-padding-remove">
          <div v-if="girl">
            <h3 class="uk-margin-remove"><span>{{ girl.name }}</span> | Perfil <span v-if="girl.user.blocked" uk-icon="icon: ban"></span> <span v-else uk-icon="icon: check"></span></h3>
            <p class="uk-margin-remove">Administre la información de {{ girl.name }}.</p>
          </div>
        </div>
      </div>
      <div class="uk-navbar-right">
        <div  v-if="isGirlEnabled" class="uk-navbar-item">
          <button @click="updateEscort()" class="uk-button red-button" type="button"><span uk-icon="icon: push" class="uk-margin-small-right"></span> Guardar</button>
        </div>
        <div class="uk-navbar-item">
          <button @click="$auth.logout()" class="uk-button theme-a" type="button"><span uk-icon="icon: sign-out" class="uk-margin-small-right"></span> Cerrar Sesión</button>
        </div>
      </div>
    </nav>


    <hr class="uk-hr">

    <div class="uk-section uk-section-small">

      <div class="uk-child-width-1-2@m" uk-grid="masonry: true">
        <div>
          <div class="uk-border-rounded uk-background-default uk-box-shadow-hover-large uk-card-body">
            <form class="uk-grid-small" uk-grid>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <h4>Datos Personales</h4>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Nombre</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.name" type="text" placeholder="Some text...">
                  </div>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Acerca</label>
                  <div class="uk-form-controls">
                    <textarea class="uk-textarea light" v-model="girl.about" rows="4" type="text" placeholder="Soy..."></textarea>
                  </div>
                </div>
              </div>
              <div class="uk-width-1-2@s">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Altura</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.height" type="text" placeholder="1.80">
                  </div>
                </div>
              </div>

              <div class="uk-width-1-2@s">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Ubicación</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.location" type="text" placeholder="Santiago...">
                  </div>
                </div>
              </div>
              <div class="uk-width-1-2@s">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Precio</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.price" type="text" placeholder="99990">
                  </div>
                </div>
              </div>
              <div class="uk-width-1-2@s">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-select">Cumpleaños</label>
                  <div class="uk-form-controls">
                    <datepicker :language="es" v-model="girl.birthdate"></datepicker>
                  </div>
                </div>
              </div>

              <div class="uk-width-1-1">
                <div class="">
                  <hr class="uk-hr">
                  <h4>Laboral</h4>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Teléfono</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.phone" type="text" placeholder="+569">
                  </div>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Horario</label>
                  <div class="uk-form-controls">
                    <input class="uk-input light" v-model="girl.datework" type="text" placeholder="10:00 a 15hrs">
                  </div>
                </div>
              </div>


            </form>
          </div>
        </div>


        <div>
          <div class="uk-border-rounded uk-background-default uk-box-shadow-hover-large uk-card-body">
            <div class="uk-width-1-1">
              <div class="uk-margin">
                <h4>Categorías</h4>
              </div>
            </div>
            <div class="uk-width-1-1">
              <div class="uk-margin">

                <ul uk-accordion>
                  <li>
                    <a class="uk-accordion-title" href="#">Servicios Incluidos</a>
                    <div class="uk-accordion-content">
                      <ul class="uk-list">
                        <li>
                          <p>owo</p>
                        </li>
                        <li>
                          <p>ewe</p>
                        </li>
                        <li>
                          <p>owooowo</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a class="uk-accordion-title" href="#">Servicios Adicionales</a>
                    <div class="uk-accordion-content">
                      <ul class="uk-list">
                        <li>
                          <p>owo</p>
                        </li>
                        <li>
                          <p>ewe</p>
                        </li>
                        <li>
                          <p>owooowo</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="girl.category">
              <div v-if="girl.category.name != 'Premium'">
                <div class="uk-width-1-1">
                  <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-select">Categoría</label>
                    <div class="uk-form-controls">
                      <select v-if="girl.category" v-model="girl.category.id" class="uk-select light">
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                      </select>
                      <select v-else v-model="placeholderCategory" class="uk-select light">
                        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="uk-width-1-1">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-select">Características</label>
                <div class="uk-form-controls">

                  <select multiple="true" v-model="selectedCharacteristics" class="uk-select light">
                    <option v-for="characteristic in characteristics" :value="characteristic.id">{{ characteristic.name }}</option>
                  </select>



                </div>
              </div>
            </div>
            <div class="uk-width-1-1">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-select">Categoría Peso</label>
                <div class="uk-form-controls">
                  <select v-if="girl.weightescort" v-model="girl.weightescort.id" class="uk-select light">
                    <option v-for="weight in weightCategories" :value="weight.id">{{ weight.name }}</option>
                  </select>
                  <select v-else v-model="placeholderWeight" class="uk-select light">
                    <option v-for="weight in weightCategories" :value="weight.id">{{ weight.name }}</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div>
          <div class="uk-border-rounded say-background-hl uk-box-shadow-hover-large uk-card-body">
            <form class="uk-grid-small" uk-grid>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <h4>Publicación</h4>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <p v-if="isGirlEnabled">Su publicación estará disponible hasta {{ convertEndPublishDate }}</p>
                  <p v-else>Contáctese con nosotros si desea continuar con su suscripción.</p>
                </div>
              </div>
              <!--<div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-select">Inicio Publicación</label>
                  <div class="uk-form-controls">
                    <div class="uk-width-1-1">
                      <div class="uk-margin">
                        <datepicker :language="es" v-model="girl.startpublishing"></datepicker>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-width-1-1">
                <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-select">Fin Publicación</label>
                  <div class="uk-form-controls">
                    <div class="uk-width-1-1">
                      <div class="uk-margin">
                        <datepicker :language="es" v-model="girl.endpublishing"></datepicker>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->
            </form>
          </div>
        </div>



        <div>
          <div class="uk-border-rounded uk-background-default uk-box-shadow-hover-large uk-card-body">
            <div class="uk-width-1-1">
              <div class="uk-margin">
                <h4>Galería de Fotos</h4>
              </div>
              <div class="uk-margin set-default-font">
                <span class="uk-text-middle">Elige una imagen para</span>
                <div uk-form-custom>
                  <input @change="onFileChange" type="file">
                  <span class="uk-link">subir</span>
                </div>
              </div>
            </div>
            <div class="uk-width-1-1 uk-margin">

              <div class="uk-grid-small uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1" uk-grid="masonry:  true;">
                <div v-for="photo in gallery">
                  <div class="uk-overflow-hidden uk-inline-clip uk-transition-toggle">
                    <div v-if="photo.image">
                      <img class="uk-border-rounded" :src="baseUrl + photo.image.url" uk-img alt="">
                    </div>
                    <div class="say uk-transition-slide-bottom uk-position-bottom uk-overlay">
                      <div class="uk-align-right">
                        <ul class="uk-iconnav">
                          <li>
                            <a @click="togglePhotoStatus(photo)" v-if="photo.isapproved" uk-icon="icon: check"></a>
                            <a @click="togglePhotoStatus(photo)" v-else uk-icon="icon: ban"></a></li>
                          <li><a @click="deletePhoto(photo)" uk-icon="icon: trash"></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Datepicker from 'vuejs-datepicker';
import {
  en,
  es
} from 'vuejs-datepicker/dist/locale'

let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {

  components: {
    Datepicker
  },
  layout: 'panel',
  data() {
    return {
      baseUrl: "",
      girl: null,
      id: null,
      selectedCategory: "",
      categories: "",
      characteristics: [],
      selectedCharacteristics: [],
      selectedWeight: null,
      weightCategories: [],
      result: null,
      es: es,
      placeholderWeight: null,
      placeholderCategory: null,
      profilephotofile: null,
      gallery: [],
      placeholderPhoto: null
    }
  },
  beforeMount() {
    this.id = this.$auth.user.escort.id
    this.baseUrl = this.$axios.defaults.baseURL
    this.token = this.$auth.getToken(this.$auth.strategy.name)
  },
  mounted() {
    this.loadGirl()
    this.loadCategories()
    this.loadCharacteristics()
    this.loadWeights()
    this.loadGalleryPhotos()

  },
  computed: {
    convertEndPublishDate() {
      return moment(this.girl.endpublishing).format("l");
    },
    isGirlEnabled(){
     var strtDt = new Date()
      var endDt = new Date(this.$auth.user.escort.endpublishing)
      return endDt >= strtDt
      //return this.$auth.user.escort.endpublishing
  }
},

  methods: {
    togglePhotoStatus(photo) {
      var isapproved = !photo.isapproved
      axios
        .put(this.baseUrl + '/photos/' + photo.id, {
          isapproved: isapproved
        }, {
          headers: {
            Authorization: this.token
          }
        })
        .then(response => {
          var vim = this
          UIkit.modal.alert('¡Estado cambiado satisfactoriamente!').then(function() {
            vim.$router.go()
          });

        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    deletePhoto(photo) {

      var vim = this

      axios
        .delete(this.baseUrl + '/photos/' + photo.id)
        .then(response => {
          //Sends escort and user information to create the relation
          UIkit.modal.alert('¡Se eliminó una photo!').then(function() {
            if (vim.gallery.length > 1) {
              vim.gallery.splice(vim.gallery.indexOf(photo), 1);
            } else {
              vim.gallery = []
            }
          });

        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);

        });
    },
    onFileChange(e) {
      this.placeholderPhoto = e.target.files[0]
      this.createPhotoContainer()
    },
    createPhotoContainer() {
      axios
        .post(this.baseUrl + '/photos/', {
          escort: this.id
        })
        .then(response => {
          console.log(response.data)
          this.uploadNewGalleryPhoto(response.data)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    uploadNewGalleryPhoto(photo) {
      let headerData = new FormData()
      headerData.append('files', this.placeholderPhoto)
      headerData.append('refId', photo.id)
      headerData.append('ref', 'photo')
      headerData.append('field', 'image')

      UIkit.modal.dialog('<p class="uk-modal-body">Se está subiendo su foto. Porfavor espere...</p>');

      axios
        .post(this.baseUrl + '/upload',
          headerData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: this.token
            }
          })
        .then(response => {
          //console.log(response.data)
          //this.gallery.push(photo)
          this.$router.go()
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadGalleryPhotos() {
      axios
        .get(this.baseUrl + '/photos/', {
          params: {
            escort: this.id
          }
        })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.gallery = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    onProfilePhotoFileChange(e) {
      this.profilephotofile = e.target.files[0]
      this.uploadProfilePhoto()
    },
    uploadProfilePhoto() {
      let headerData = new FormData()
      headerData.append('files', this.profilephotofile)
      headerData.append('refId', this.id)
      headerData.append('ref', 'escort')
      headerData.append('field', 'profilephoto')

      UIkit.modal.dialog('<p class="uk-modal-body">Se está subiendo su foto de perfil. Porfavor espere...</p>');

      axios
        .post(this.baseUrl + '/upload',
          headerData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: this.token
            }
          })
        .then(response => {
          this.$router.go()
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadGirl() {
      axios
        .get(this.baseUrl + '/escorts/' + this.id)
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.girl = response.data
          this.selectedCategory = response.data.category.id
          this.selectedCharacteristics = response.data.characteristics.map(a => a.id)
          this.selectedWeight = response.data.weightescort.id
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadCategories() {
      axios
        .get(this.baseUrl + '/categories/')
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.categories = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadCharacteristics() {
      axios
        .get(this.baseUrl + '/characteristics/')
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.characteristics = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadWeights() {
      axios
        .get(this.baseUrl + '/weightescorts/')
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.weightCategories = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },

    updateEscort() {

      const updatedGirl = this.girl
      const birthdate = new Date(this.girl.birthdate).toISOString()

      var bdate = moment(updatedGirl.birthdate).format('YYYY-MM-DD HH:mm:ss');
      var startpublishdate = moment(updatedGirl.startpublishing).format('YYYY-MM-DD HH:mm:ss');
      var endpublishdate = moment(updatedGirl.endpublishing).format('YYYY-MM-DD HH:mm:ss');
      var weightcategory = null
      var maincategory = null

      if (!updatedGirl.weightescort) {
        weightcategory = this.placeholderWeight
      } else {
        weightcategory = updatedGirl.weightescort.id
      }

      if (!updatedGirl.category) {
        maincategory = this.placeholderCategory
      } else {
        maincategory = updatedGirl.category.id
      }


      //console.log(moment(birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY'))

      axios
        .put(this.baseUrl + '/escorts/' + this.id, {
          name: updatedGirl.name,
          about: updatedGirl.about,
          height: updatedGirl.height,
          location: updatedGirl.location,
          price: updatedGirl.price,
          phone: updatedGirl.phone,
          datework: updatedGirl.datework,
          birthdate: bdate,
          category: maincategory,
          startpublishing: startpublishdate,
          endpublishing: endpublishdate,
          weightescort: weightcategory,
          characteristics: this.selectedCharacteristics

        })
        .then(response => {
          console.log(maincategory)
          UIkit.modal.alert('¡Se actualizó la información!').then(function() {

          });

        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
          UIkit.modal.alert('¡Oh oh! Algo salió mal').then(function() {

          });
        });
    }
  }
}
</script>

<style type="scss">
.photo-container {
  width: 100px;
  height: 100px;
  background-color: #d1d1d1;
}
</style>
