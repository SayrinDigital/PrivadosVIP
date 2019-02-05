<template>

<div>
  <p class="section-header">Scorts</p>
  <h1>Nuestras Chicas</h1>

  <div class="uk-section uk-section-small">
    <div class="uk-child-width-1-4@l uk-child-width-1-2@m uk-child-width-1-1 uk-grid-small" uk-grid>
      <div v-for="girl in girls" >
        <GirlCard :girl="girl"></GirlCard>
      </div>
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
