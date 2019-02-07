<template>
<div>
  <p class="section-header">Scorts</p>
  <h1>Nuestras Chicas</h1>

  <div class="uk-section uk-section-small">
    <div class=" uk-child-width-1-4@m uk-child-width-1-3 uk-grid-small" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div > div; delay: 100;">
      <div v-for="girl in girls">
        <GirlCard :girl="girl"></GirlCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  components: {
    GirlCard
  },
  data() {
    return {
      girls: null
    }
  },
  mounted() {
    axios
      .get('http://localhost:1337/escorts', {
        params: {
          _sort: 'id:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
        }
      })
      .then(response => {
        // Handle success.
        //console.log('Well done, here is the list of posts: ', response.data);
        this.girls = response.data
        this.girls.sort((a, b) => Math.random() > .5 ? -1 : 1);
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  },

}
</script>
