<template>

  <section >

    <div class="uk-container uk-container-large">


      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 1000">
        <div class="uk-section uk-section-small">
          <ul class="uk-slideshow-items" uk-height-viewport="min-height: 300">
            <li v-for="girl in girls" >
              <GirlCard :girl="girl"></GirlCard>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </section>

</template>

<script>
import axios from 'axios'
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  data() {
    return {
      girls: null
    }
  },
  components: {
    GirlCard,
  },
  mounted() {
    axios
      .get('http://localhost:1337/escorts', {
        params: {
          _sort: 'id:desc',
          _limit: 10 // Generates http://localhost:1337/posts?_sort=createdAt:desc
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
