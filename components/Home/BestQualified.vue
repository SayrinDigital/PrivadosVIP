<template>

<div class="uk-container uk-container-large">

  <p class="section-header">Scorts</p>
  <h1>Mejor Calificadas</h1>

  <div class="uk-section uk-section-small">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid uk-grid-small uk-child-width-1-5@l" >
          <li v-for="girl in girls" >
            <GirlCard :girl="girl"></GirlCard>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
  </div>
</div>

</template>

<script>
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  data() {
    return {
      girls: [
        { "id" : 1,
          "name": "Laura",
          "cover" : "https://images.unsplash.com/photo-1520065949650-380765513210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        },
        {
          "id" : 2,
          "name": "Carmen",
          "cover" : "https://images.unsplash.com/photo-1515161318750-781d6122e367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80"
        }
      ]
    }
  },
  components: {
    GirlCard
  }
}
</script>
