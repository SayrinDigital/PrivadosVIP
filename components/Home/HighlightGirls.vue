<template>
<section class="uk-section">

  <div class="uk-container uk-container-large">
    <p class="section-header">Scorts</p>
    <h1>Destacadas</h1>

    <div class="uk-section uk-section-small">
      <div class="uk-child-width-1-5@l uk-child-width-1-3@m uk-child-width-1-2@s uk-child-width-1-1 uk-grid-small" uk-grid>
        <div v-for="girl in girls" >
          <GirlCard :girl="girl"></GirlCard>
        </div>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import GirlCard from '~/components/Home/components/GirlCard.vue'

export default {
  data() {
    return {
      girls: [
        { "id" : 1,
          "name": "Laura",
          "cover" : "https://images.unsplash.com/photo-1520065949650-380765513210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
