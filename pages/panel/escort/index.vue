<template>

<div class="uk-container uk-container-large">
  <button type="submit" @click="logout">Cerrar Sesión</button>
</div>

</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'escort',
  middleware: 'escortAuthenticated',
  methods: {
    logout() {
      // Code will also be required to invalidate the JWT Cookie on external API

      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
      this.$router.push("/login");
    }
  }
}
</script>
