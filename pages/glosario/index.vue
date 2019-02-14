<template>

  <div class="uk-section">
    <div class="uk-container uk-container-large">

      <div class="uk-text-center">
        <p class="section-header">PrivadosVIP</p>
        <h1>Glosario</h1>
      </div>

      <div class="uk-container uk-container-small">
          <div class="uk-section uk-section-small">
            <div class="uk-width-large@m uk-margin-auto">
              <ul class="uk-list uk-list-large" v-if="glossaryterms">
                <li v-for="term in glossaryterms">
                  <h3>{{ term.term }}</h3>
                  <p>{{ term.description }}</p>
                </li>
              </ul>
            </div>
          </div>
      </div>

    </div>
  </div>

</template>

<script>

import axios from 'axios'

export default {
  auth: false,
  transition: 'fade',
  data(){
    return{
      glossaryterms: [],
      baseUrl: ""
    }
  },
  beforeMount(){
    this.baseUrl =  this.$axios.defaults.baseURL
    this.loadGlossary()
  },
  methods: {
    loadGlossary: function(){
      axios
      .get(this.baseUrl + '/glossaries', {
      params: {
        _sort: 'id:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
      }
      })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.glossaryterms = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  }
}
</script>
