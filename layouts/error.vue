<template>
  <div class="uk-container uk-container-large">
    <div class="uk-section">
      <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
      <h1 v-else>Ocurrió un error inesperado</h1>
      <div class="uk-margin">
              <nuxt-link  to="/">Volver</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>
