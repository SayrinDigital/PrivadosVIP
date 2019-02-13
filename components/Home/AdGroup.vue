<template lang="html">

<div v-if="adgroup" class="uk-container uk-text-center">

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1"  uk-slideshow="ratio: 200:400;  max-height: 250; autoplay: true; autoplay-interval: 2000 ">


      <ul class="uk-slideshow-items">
          <li v-for="ad in adgroup">
              <a :href="ad.linkto" class="uk uk-display-block">
                <img class="uk-box-shadow-large  uk-border-rounded"  :src="baseUrl + ad.cover.url" alt="">
              </a>
          </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

  </div>
</div>

</template>

<script>

import axios from 'axios'

export default {

  data(){
    return{
       baseUrl : "",
           adgroup: null,
    }
  },
  computed: {
  groupselector: function () {
    return this.position
  }
 },
  props: ['position'],
  components:{

  },
  beforeMount(){
    this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted(){
  this.loadAds()
  console.log('')
  },
  methods: {
    loadAds: function(){
      axios
      .get(this.$axios.defaults.baseURL + '/ads/', {
        params:{
          "adgroup_contains" :  this.position
        }
      })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          if(response.data.length!=0){
          this.adgroup = response.data
        }
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  }
}
</script>
