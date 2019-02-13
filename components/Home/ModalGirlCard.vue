<template>

  <modal
        name="modal-girl-card"
        transition="nice-modal-fade"
        :min-width="200"
        :min-height="200"
        :max-height="1300"
        :delay="100"
        :scrollable="true"
        width="80%"
        height="auto"
        @before-open="beforeOpen"
        :adaptive="true"
        >
      <div class="content">

        <div class="profile-card-container uk-box-shadow-large">
          <div class="header">
            <div uk-grid>
              <div class="uk-width-medium uk-position-relative">

              </div>
              <div class="uk-width-expand@m">
                <div>
                  <div v-if="girl">

                    <div  v-if="girl" class="uk-hidden@m uk-position-relative photo-container uk-border-rounded uk-background-cover" uk-img :data-src="baseUrl + girl.profilephoto.url">
                      <div class="uk-position-top-right">
                        <div class="uk-padding-small">
                          <!--<h3 class="text-highlight">{{ girl.price | currency('$',0) }}</h3>-->
                          <span class="uk-badge badge-highlight">{{ girl.price| currency('$',0) }} CLP</span>
                        </div>
                      </div>
                      <div class="uk-position-bottom-left">
                        <div class="uk-padding-small">
                          <a :href="'tel:' +  girl.phone" :uk-tooltip="girl.phone" class="uk-margin-small-right"><span class="uk-icon uk-icon-button" uk-icon="icon: phone"></span></a>
                          <a :href="'https://wa.me/' + girl.phone + '/?text=' + wspmessage " class=""><span class="uk-icon uk-icon-button" uk-icon="icon: whatsapp"></span></a>
                        </div>
                      </div>
                    </div>

                    <div class="uk-card-body">
                      <div class="uk-child-width-1-4@m uk-grid-small uk-child-width-1-2@s uk-child-width-1-1" uk-grid>
                        <div>
                          <div class="girl-card-container">
                            <h4 class="uk-margin">{{ girl.name }}</h4>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="tag"> <span class="uk-icon uk-margin-small-right" uk-icon="icon: star;"></span><span class="uk-highlight">{{ ratingfinal }}</span></p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p><span class="uk-margin-small-right" uk-icon="icon: location;"></span> {{ girl.location }}</p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p class="text-highlight"><span class="uk-margin-small-right" uk-icon="icon: phone;"></span> {{ girl.phone }}</p>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p><span class="uk-margin-small-right" uk-icon="icon: calendar;"></span> {{ girl.datework }}</p>
                          </div>
                        </div>
                        <div>
                          <div>                        <p><span class="uk-margin-small-right" uk-icon="icon: happy;"></span>{{ girl.birthdate | getAge }} años - {{ girl.weight }} kgs. - {{ girl.height }} mts.</p></div>
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
              <div class="uk-width-medium@s uk-width-1-1 uk-position-relative">
                <div  v-if="girl" class="uk-visible@m uk-position-relative photo-container uk-border-rounded uk-background-cover" uk-img :data-src="baseUrl + girl.profilephoto.url">
                  <div class="uk-position-top-right">
                    <div class="uk-padding-small">
                      <!--<h3 class="text-highlight">{{ girl.price | currency('$',0) }}</h3>-->
                      <span class="uk-badge badge-highlight">{{ girl.price| currency('$',0) }} CLP</span>
                    </div>
                  </div>
                  <div class="uk-position-bottom-left">
                    <div class="uk-padding-small">
                      <a :href="'tel:' +  girl.phone" :uk-tooltip="girl.phone" class="uk-margin-small-right"><span class="uk-icon uk-icon-button" uk-icon="icon: phone"></span></a>
                      <a :href="'https://wa.me/' + girl.phone + '/?text=' + wspmessage " class=""><span class="uk-icon uk-icon-button" uk-icon="icon: whatsapp"></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-width-expand@m uk-margin">

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
                            <h4>Adicionales</h4>
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

            <div v-if="gallery" class="uk-section uk-section-small">
              <div  class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

                <ul  class="uk-slider-items uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid" uk-lightbox="animation: slide">
                  <li v-for="photo in gallery" :key="photo.id">
                    <GalleryGirl :photo="photo"></GalleryGirl>
                  </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

              </div>
            </div>

            <!-- End Gallery Slider-->

          </div>
        </div>
      </div>
    </modal>


</template>

<script>

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
      ratingfinal: 0,
      wspmessage: "",
        baseUrl : "",
    }
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
    },
    getCurrency: function(value){
      let val = (value/1).toFixed(2).replace('.', ',')
       return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  methods: {
    beforeOpen (event) {
      this.baseUrl =  this.$axios.defaults.baseURL
      this.girl = event.params.girl
      this.getComments()
      this.setNewRating()
      this.getGallery()
      this.getWhatsappMessage()
    },
    getComments: function() {
      axios
        .get(this.baseUrl + '/escorts/' + this.girl.id,{
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
        .put(this.baseUrl + '/escorts/' + this.girl.id, {
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
        .post(this.baseUrl + '/comments/', {
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
        .get(this.baseUrl + '/photos/', {
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
    },

    getWhatsappMessage: function(){
      axios
        .get(this.baseUrl + '/whatsapps/')
        .then(response => {
          var message = response.data[0].message
          this.wspmessage = message.replace('{{ nombre }}', this.girl.name)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        })
    }
  }
}
</script>

<style lang="css" >


  @media only screen and (max-width: 960px){
   .content{
     margin-top: 10px;
   }

  }

</style>
