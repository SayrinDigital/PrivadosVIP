<template>

  <div class="uk-height-1-1 uk-cover-container uk-background-secondary">

		<img
		     sizes="100vw"
		     src="https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80" alt="" data-uk-cover data-uk-img
		>

		<div class="uk-position-cover uk-overlay-primary"></div>

		<div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-light uk-position-relative uk-position-z-index">
			<div class="uk-position-bottom-center uk-position-small uk-visible@m">
				<span class="uk-text-small uk-text-muted">© {{ fullYear }} Privados VIP {{ username }}</span>
        <!--<a href="#" class="nav-link" @click="logout">
              Logout
            </a>-->
			</div>
			<div class="uk-width-medium uk-padding-small" uk-scrollspy="cls: uk-animation-fade">
				<!--<div class="uk-text-center uk-margin">
					<img src="img/login-logo.svg" alt="Logo">
				</div>-->
				<form @submit.prevent="handleSubmit">
					<fieldset class="uk-fieldset">
            <div class="uk-margin">
              <h3 class="text-highlight uk-text-center">Registro PrivadosVIP</h3>

            </div>
            <div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
								<input class="uk-input uk-border-pill" v-model="username" required placeholder="Nombre" type="text">
							</div>
						</div>
						<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
								<input class="uk-input uk-border-pill" v-model="useremail" required placeholder="Email" type="email">
							</div>
						</div>
						<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
								<input class="uk-input uk-border-pill" v-model="password" required placeholder="Contraseña" type="password">
							</div>
						</div>
            <!--<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
								<input class="uk-input uk-border-pill" v-model="useremail" required placeholder="Email" type="email">
							</div>
						</div>-->

						<!--<div class="uk-margin">
							<label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
						</div>-->
            <div  class="uk-margin">
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
const Cookie = process.client ? require('js-cookie') : undefined
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
import { mapMutations } from 'vuex'

export default {
  transition: 'fade',
  layout : 'login',
  middleware: 'notAuthenticated',
  data() {
    return{
      response: null,
      username: "",
      useremail: "",
      password: "",
      errormessage: null,
      loading: false,
      baseUrl: ""
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

    handleSubmit(){
      axios
  .post(this.baseUrl + '/auth/local/register', {
    username: this.username,
    email: this.useremail,
    password: this.password,
    role : {
      'id' : 2
    },
    blocked: true
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
},
    async handleSubmita() {

      /*try {
        this.loading = true
        const response = await strapi.register(
        {
          username: 'Strapi user',
    email: 'user@strapi.io',
    password: 'strapiPassword'
        }
        )
        this.loading = false
        //this.setUser(response.user)
        //this.$router.push('/')
        console.log('registered')
      } catch (err) {
        this.loading = false
        alert(err.message || 'Ocurrió un error.')
      }*/
    },

  }
}
</script>
