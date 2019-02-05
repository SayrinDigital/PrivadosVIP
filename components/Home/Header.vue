<template>



<div class="uk-position-relative uk-visible-toggle uk-light min-header" tabindex="-1" uk-slideshow="ratio: false; animation: pull">

    <ul class="uk-slideshow-items" uk-height-viewport >
        <li v-for="header in headersList">
            <Header :header="header"></Header>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>

</template>

<script>
import axios from 'axios'
import Header from '~/components/Home/components/HeaderCard.vue'

export default {
  components: {
    Header
  },
  data(){
    return{
      headersList: null
    }
  },
  mounted(){
    axios
  .get('http://localhost:1337/headers', {
    params: {
      _sort: 'id:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
    }
  })
      .then(response => {
        // Handle success.
        //console.log('Well done, here is the list of posts: ', response.data);
        this.headersList = response.data
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }
}
</script>
