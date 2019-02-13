<template>

  <section class="uk-section uk-section-large">
    <div class="uk-container uk-container-large">
      <div class="uk-text-center">
        <p class="section-header">{{ joinus.subtitle }}</p>
        <h1>{{ joinus.title }}</h1>
        <p class="uk-width-large@m uk-margin-auto">{{ joinus.content }}</p>
        <a :href="joinus.linkto" class="uk-button uk-button-large red-button">{{ joinus.linktext }}</a>
      </div>
    </div>
  </section>

</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      baseUrl: "",
      joinus: []
    }
  },
  beforeMount(){
     this.baseUrl =  this.$axios.defaults.baseURL
  },
  mounted(){
   this.loadinformation()
  },
  methods: {
    loadinformation: function(){
      axios
      .get(this.$axios.defaults.baseURL + '/joinuses/')
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
         if(response.data.length != 0){
          this.joinus = response.data[0]
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
