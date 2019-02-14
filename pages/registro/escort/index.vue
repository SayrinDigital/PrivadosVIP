<template>
<div class="uk-height-1-1 uk-cover-container uk-background-secondary">

  <img sizes="100vw" src="https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80" alt="" data-uk-cover data-uk-img>

  <div class="uk-position-cover uk-overlay-primary"></div>

  <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-light uk-position-relative uk-position-z-index">
    <div class="uk-position-bottom-center uk-position-small uk-visible@m">
      <span class="uk-text-small uk-text-muted">© {{ fullYear }} Privados VIP </span>
      <!--<a href="#" class="nav-link" @click="logout">
              Logout
            </a>-->
    </div>
    <div class="uk-width-medium uk-padding-small" uk-scrollspy="cls: uk-animation-fade">
      <!--<div class="uk-text-center uk-margin">
					<img src="img/login-logo.svg" alt="Logo">
				</div>-->
      <form @submit.stop.prevent="register()">
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <h3 class="text-highlight uk-text-center">Solicitud Privados VIP</h3>

          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: pen"></span>
              <input class="uk-input uk-border-pill" required v-model="fullname" required placeholder="Nombre Completo" type="text">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
              <input class="uk-input uk-border-pill" required v-model="username" required placeholder="Nombre de Usuario" type="text">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
              <input class="uk-input uk-border-pill" required v-model="useremail" required placeholder="Email" type="email">
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
              <input class="uk-input uk-border-pill" required v-model="password" required placeholder="Contraseña" type="password">
            </div>
          </div>
          <div class="uk-margin">
            <div uk-form-custom="target: true" >
              <input type="file" @change="onFileChange" required >
              <input class="uk-input uk-width-1-1"  required type="text" placeholder="Elegir foto" disabled>
            </div>
          </div>
          <div class="uk-margin">
            <p class="uk-text-center uk-text-danger">{{ errormessage }}</p>
          </div>
          <div class="uk-margin">
            <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">Enviar Solicitud</button>
          </div>
        </fieldset>
      </form>

    </div>
  </div>



</div>
</template>

<script>

import axios from 'axios'
let UIkit;

if (process.browser) {
  UIkit = require('uikit');
}

export default {
  auth: false,
  transition: 'fade',
  layout : 'login',
  data() {
    return{
      response: null,
      username: "",
      useremail: "",
      password: "",
      fullname: "",
      errormessage: null,
      loading: false,
      baseUrl: "",
      photoImage: ""
    }
  },
  computed:{
    fullYear: function(){
      return (new Date()).getFullYear()
    }
  },

  beforeMount(){
       this.baseUrl =  this.$axios.defaults.baseURL
  },

  methods: {
    onFileChange(e) {
      this.photoImage = e.target.files[0]
    },
    async register() {

      try {

        await axios.post(this.baseUrl + '/auth/local/register', {
          username: this.username,
          password: this.password,
          email: this.useremail,
          fullname: this.fullname,
          blocked: true
        }).then(response => {
            this.createEscort(response.data.user)
          //this.updateEscort(response.data.user)
        })

      } catch (e) {
        console.log(e);

      }
    },
    createEscort(user){
      axios
        .post(this.baseUrl + '/escorts', {
            name: this.fullname,
            user: user.id
        })
        .then(response => {
            //Sends escort and user information to create the relation

        this.uploadFile(response.data)
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);

        });
    },
    uploadFile(newEscort){


                 let headerData = new FormData()
                 headerData.append('files', this.photoImage)
                 headerData.append('refId', newEscort.id)
                 headerData.append('ref', 'escort')
                 headerData.append('field', 'profilephoto')

                 axios
                   .post(this.baseUrl + '/upload',
                    headerData,
                    {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  })
                   .then(response => {

                     UIkit.modal.alert('¡Se envió su solicitud satisfactoriamente, nos comunicaremos al correo provisto!').then(function() {
                     this.$router.push('/')
        });

                   })
                   .catch(error => {
                     // Handle error.
                     console.log('An error occurred:', error);

                   });
      },
  }
}

  </script>

<style type="scss" scoped>

 .uk-form-custom{
   width: 100%;
 }

</style>
