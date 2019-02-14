<template>

  <div class="uk-height-1-1 uk-cover-container uk-background-secondary">

		<img
		     sizes="100vw"
		     src="https://images.unsplash.com/photo-1509854120-eeab44807cd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1393&q=80" alt="" data-uk-cover data-uk-img
		>

		<div class="uk-position-cover uk-overlay-primary"></div>

		<div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-light uk-position-relative uk-position-z-index">
			<div class="uk-position-bottom-center uk-position-small uk-visible@m">
				<span class="uk-text-small uk-text-muted">© {{ fullYear }} Privados VIP - {{ baseUrl }}</span>
			</div>
			<div class="uk-width-medium uk-padding-small" uk-scrollspy="cls: uk-animation-fade">
				<!--<div class="uk-text-center uk-margin">
					<img src="img/login-logo.svg" alt="Logo">
				</div>-->
				<form @submit.prevent="handleSubmit">
					<fieldset class="uk-fieldset">
            <div class="uk-margin">
              <h3 class="text-highlight uk-text-center">Privados VIP</h3>

            </div>
						<div class="uk-margin">
							<div class="uk-inline uk-width-1-1">
								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
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
							<label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
						</div>-->
            <div  class="uk-margin">
                <p class="uk-text-center uk-text-danger">{{ errormessage }}</p>
            </div>
						<div class="uk-margin">
							<button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">Iniciar Sesión</button>
						</div>
					</fieldset>
				</form>
				<div>
					<div class="uk-text-center">
                        <a class="uk-link-reset uk-text-small uk-button-text uk-margin-small-right" data-uk-toggle="target: #register;animation: uk-animation-slide-top-small">Registrarse</a>
						<a class="uk-link-reset uk-text-small  uk-button-text" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">¿Olvidaste tu contraseña?</a>
					</div>
					<div class="uk-margin-small-top" id="recover" hidden>
						<form>

							<div class="uk-margin-small">
								<div class="uk-inline uk-width-1-1">
									<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
									<input class="uk-input uk-border-pill" placeholder="E-mail" required type="text">
								</div>
							</div>
							<div class="uk-margin-small">
								<button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">SEND PASSWORD</button>
							</div>

						</form>
					</div>

          <div class="uk-margin-small-top" id="register" hidden>

							<div class="uk-margin-small">
								<div class="uk-margin">
                  <nuxt-link to="/registro/cliente" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">Cliente</nuxt-link>
                </div>
                	<div class="uk-margin">
                    <nuxt-link to="/registro/escort" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">Escort</nuxt-link>
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


export default {
  transition: 'fade',
  layout : 'login',
  data() {
    return{
      response: null,
      useremail: "",
      password: "",
      errormessage: null,
      baseUrl: ""
    }
  },
  computed:{
    fullYear: function(){
      return (new Date()).getFullYear()
    }
  },
  beforeMount() {
      this.baseUrl = this.$axios.defaults.baseURL
    },
  methods: {
  async handleSubmit() {
      // this.$toast.show('Logging in...', { duration: 500})
      await this.$auth.loginWith('local', {
        data: {
          identifier: this.useremail,
          password: this.password
        }
      })
      .then(response => {
        this.$axios.setToken(this.$auth.getToken(this.$auth.strategy.name))
      })

      .catch(error => {
        this.errormessage = "Porfavor revise sus credenciales e intente nuevamente"
        console.log('An error occurred:', error);
      });
  },
}
 }
</script>
