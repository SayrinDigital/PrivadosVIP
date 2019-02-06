<template>
<div class="uk-modal-container" ref="modalgirlcard" uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <button class="uk-modal-close-default" type="button" uk-close></button>
    <div class="profile-card-container uk-box-shadow-large">
      <div class="header">
        <div uk-grid>
          <div class="uk-width-medium uk-position-relative">

          </div>
          <div class="uk-width-expand">
            <div>
              <div v-if="girl">

                <div class="uk-card-body">
                  <div class="uk-child-width-1-4" uk-grid>
                    <div>
                      <div class="girl-card-container">
                        <h4>{{ girl.name }}</h4>
                        <p class="tag"> <span class="uk-icon uk-margin-small-right" uk-icon="icon: star;"></span><span class="uk-highlight">{{ ratingfinal | limitDecimals }}</span></p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p><span class="uk-margin-small-right" uk-icon="icon: location;"></span> {{ girl.location }}</p>
                        <p><span class="uk-margin-small-right" uk-icon="icon: phone;"></span> {{ girl.phone }}</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p><span class="uk-margin-small-right" uk-icon="icon: calendar;"></span> {{ girl.birthdate | getAge }} años</p>
                        <p><span class="uk-margin-small-right" uk-icon="icon: happy;"></span> {{ girl.weight }} kgs. - {{ girl.height }} mts.</p>
                      </div>
                    </div>
                    <div>
                      <div class="uk-text-right">
                        <a :href="'tel:' +  girl.phone" :uk-tooltip="girl.phone" class="uk-display-block uk-margin-bottom"><span class="uk-icon uk-icon-button" uk-icon="icon: phone"></span></a>
                        <a :href="'https://api.whatsapp.com/send?phone=' + girl.phone + '&text=Hola, te escribo desde Privados VIP' " class=""><span class="uk-icon uk-icon-button" uk-icon="icon: whatsapp"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Switch-->


            </div>
          </div>
        </div>
      </div>
      <div class="body uk-card-body">

        <div uk-grid>
          <div class="uk-width-medium uk-position-relative">
            <div v-if="girl" class="photo-container uk-border-rounded uk-background-cover" uk-img :data-src="'http://localhost:1337' + girl.profilephoto.url"></div>
          </div>
          <div class="uk-width-expand">

            <div class="info-container">



              <ul uk-tab="animation: uk-animation-fade;" class="uk-margin-remove-bottom">
                <li><a href="#">Información</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Calificaciones</a></li>
              </ul>



              <ul class="uk-switcher switcher-container uk-margin">
                <li>
                  <div>
                    <h4>Acerca De Mi</h4>
                    <p class="uk-width-large" v-if="girl">{{ girl.about }}</p>

                  </div>
                </li>
                <li>
                  <h4>Servicios</h4>

                  <div class="uk-section uk-section-small">
                    <div v-if="girl" class="uk-child-width-expand@s" uk-grid>

                      <div>
                        <h4>Incluidos</h4>
                        <ul class="uk-list uk-list-large uk-list-divider">
                          <li v-for="iservice in girl.includedservices">
                            {{ iservice.name }}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4>Especiales</h4>
                        <ul class="uk-list uk-list-large uk-list-divider">
                          <li v-for="sservice in girl.specialservices">
                            {{ sservice.name }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </li>
                <li>
                  <div>
                    <div class="uk-clearfix">
                      <h4 class="uk-margin-bottom uk-display-inline uk-float-left">Calificaciones</h4>
                      <div class="uk-float-right">
                        <div>
                          <button class="uk-button red-button uk-float-right"><span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span> Calificar</button>
                          <div class="dropdown-style-a uk-border-rounded uk-box-shadow-hover-medium uk-width-large" uk-dropdown="mode: click">
                            <div>
                              <form class="uk-grid-small" uk-grid>
                                <div>
                                  <h4>Calificar</h4>
                                </div>
                                <div class="uk-width-1-1">
                                  <input class="uk-input" v-model="name" type="text" placeholder="Nombre">
                                </div>
                                <div class="uk-width-1-1">
                                  <textarea class="uk-textarea" v-model="comment" rows="4" type="text" placeholder="Comentario"></textarea>
                                </div>
                                <div class="uk-width-1-1 uk-text-right">
                                  <no-ssr>
                                    <StarRating v-bind:star-size="20" v-model="rating"></StarRating>
                                  </no-ssr>
                                </div>
                                <div class="uk-text-right uk-width-1-1">
                                  <button type="button" class="uk-button red-button" @click="postRateComment">Enviar</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <transition-group name="fade" tag="ul" class="uk-comment-list uk-margin-left">
                      <li class="container-comment" v-for="comment in comments" :key="comment.id">
                        <Comment :comment="comment"></Comment>
                      </li>
                    </transition-group>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <!-- Gallery Slider-->

        <div v-if="gallery" class="uk-section uk-section-small">
          <div  class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

            <transition-group name="list-complete" tag="ul" class="uk-slider-items uk-child-width-1-4 uk-grid-small uk-grid" uk-lightbox="animation: slide">
              <li v-for="photo in gallery" :key="photo.id">
                <GalleryGirl :photo="photo"></GalleryGirl>
              </li>
              </transition-group>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

          </div>
        </div>

        <!-- End Gallery Slider-->

      </div>
    </div>
  </div>
</div>
</template>

<script>
let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

import axios from 'axios'
import StarRating from 'vue-star-rating'
import Comment from '~/components/Home/components/Comment.vue'
import GalleryGirl from '~/components/Home/components/GalleryGirl.vue'

export default {

  components: {
    StarRating,
    Comment,
    GalleryGirl
  },
  data() {
    return {
      numberOfClicks: 0,
      girl: null,
      rating: 2,
      name: "",
      comment: "",
      comments: [],
      gallery: [],
      ratingfinal: 0
    }
  },
  created() {
    // $on method will receive the updated count value from the sender component
    this.$nuxt.$on('SHOWMODALGIRL', data => {
      this.girl = data
      this.getComments()
      UIkit.modal(this.$refs.modalgirlcard).show()
    });
  },
  beforeDestroy() {
    // $off method will turned off the event listner
    this.$nuxt.$off('SHOWMODALGIRL');
  },
  filters: {
    getAge: function(value) {
      var today = new Date();
      var birthDate = new Date(value);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    limitDecimals: function(value) {
      return value.toFixed(1)
    }
  },
  mounted() {

  },
  methods: {

    getComments: function() {
      axios
        .get('http://localhost:1337/escorts/' + this.girl.id,{
          params:{
            _sort: 'id:desc'
          }
        })
        .then(response => {
          this.comments = response.data.comments,
            this.setNewRating()
          this.getGallery()
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },

    setNewRating: function() {
      var self = this
      const commentsQuantity = self.comments.length
      const rating = self.comments.reduce((acc, item) => acc + item.rate, 0);
      const finalrate = rating / commentsQuantity

      axios
        .put('http://localhost:1337/escorts/' + this.girl.id, {
          rating: finalrate
        })
        .then(response => {
          this.ratingfinal = finalrate
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });


    },

    postRateComment: function() {

      axios
        .post('http://localhost:1337/comments/', {
          name: this.name,
          comment: this.comment,
          rate: this.rating,
          escort: this.girl.id
        })
        .then(response => {
          // Handle success.
          this.comments.unshift({
            id: response.data.id,
            name: response.data.name,
            comment: response.data.comment,
            rate: response.data.rate
          })

          UIkit.notification({
            message: 'Gracias por tu comentario',
            status: 'primary',
            pos: 'top-center',
            timeout: 5000
          });

        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        })
    },

    getGallery: function() {
      axios
        .get('http://localhost:1337/galleryphotos/', {
          params: {
            'escort': this.girl.id
          }
        })
        .then(response => {
          this.gallery = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        })
    }
  }
}
</script>

<style lang="scss">
.container-comment {
    transition: all 200ms ease-in-out;
}
</style>
