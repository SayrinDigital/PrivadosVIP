<template>
<div>
  <p class="section-header">Scorts</p>
  <h1>Nuestras Chicas</h1>

  <div class="uk-section uk-section-small">
    <h4 class="light">Filtrar Búsqueda</h4>

  </div>

  <div>

  </div>

  <div class="uk-section uk-section-small">


    <div>

      <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>

        <div class="filter"  v-if="weights">

         <!--<label>
           <input type="radio" v-model="selectedCategory" value="Todas" /> Todas</label>-->
           <div class="uk-form-controls">
            <select v-model="selectedCategory" class="uk-select" id="form-stacked-select">
              <option value="Todas">Todas</option>
                <option  v-for="weight in weights" :value="weight.name">{{ weight.name }}</option>
            </select>
        </div>
          <!--<label v-for="weight in weights">
            <input type="radio" v-model="selectedCategory" :value="weight.name" /> {{ weight.name }}
          </label>-->

        </div>

        <div class="filter"  v-if="characteristics">

          <div class="uk-form-controls">
           <select v-model="selectedCharac" class="uk-select" id="form-stacked-select">
             <option value="Todas">Todas</option>
               <option  v-for="chara in characteristics" :value="chara.name"> {{ chara.name }}</option>
           </select>
       </div>

         <!--<label>
           <input type="radio" v-model="selectedCharac" value="Todas" /> Todas</label>
          <label v-for="chara in characteristics">
            <input type="radio" v-model="selectedCharac" :value="chara.name" /> {{ chara.name }}
          </label>-->

        </div>

        <div class="filter" >

          <div class="uk-form-controls">
           <select v-model="selectedAge" class="uk-select" id="form-stacked-select">
             <option value="Todas">Todas</option>
               <option  v-for="age in agesCondition" :value="age.condition" > {{ age.condition }}</option>
           </select>
       </div>

         <!--<label>
           <input type="radio" v-model="selectedAge" value="Todas" /> Todas</label>
          <label v-for="age in agesCondition">
            <input type="radio" v-model="selectedAge" :value="age.condition" /> {{ age.condition }}
          </label>-->

        </div>

        <div class="filter" >

          <div class="uk-form-controls">
           <select v-model="selectedPrice" class="uk-select" id="form-stacked-select">
             <option value="Todas">Todas</option>
               <option  v-for="price in pricesCondition" :value="price.condition"  > {{ price.condition }}</option>
           </select>
       </div>

         <!--<label>
           <input type="radio" v-model="selectedPrice" value="Todas" /> Todas</label>
          <label v-for="price in pricesCondition">
            <input type="radio" v-model="selectedPrice" :value="price.condition" /> {{ price.condition }}
          </label>-->

        </div>

      </div>

      <div ref="girlscontainer" class="uk-child-width-1-4@m uk-child-width-1-3 uk-grid-small" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div > a; delay: 100;">
        <div v-for="girl in girlsChunk">
          <GirlCard :girl="girl"></GirlCard>
        </div>
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
      girls: [],
      baseUrl: "",
      size: 5,
      index: 0,
      characteristics: [],
      characteristic: "",
      weight: "",
      age: "",
      price: "",
      height: "",
      weights: [],
      selectedCategory: "Todas",
      selectedCharac: "Todas",
      selectedAge: "Todas",
      selectedPrice: "Todas",
      agesCondition: [
        {"condition": "Entre 18 y 25"},
        {"condition": "Entre 25 y 32"},
        {"condition": "Más de 32"}
      ],
      pricesCondition: [
        {"condition": "Entre $30.000 y $50.000"},
        {"condition": "Entre $50.000 y $80.000"},
        {"condition": "Más de $80.000"}
      ]
    }
  },
  computed: {
    girlsChunk: function() {
      var vm = this;
      var category = vm.selectedCategory
      var charac = vm.selectedCharac
      var age = vm.selectedAge
      var lower = 18
      var upper = 0
      var price = vm.selectedPrice
      var lowerPrice = 20000
      var upperPrice = 0

      switch (age) {
        case 'Entre 18 y 25':
        lower = 18
        upper = 25
          break;
          case 'Entre 25 y 32':
          lower = 25
          upper = 32
            break;
            case 'Más de 32':
            lower = 32
            upper = 100
              break;
      }

      switch (price) {
        case 'Entre $30.000 y $50.000':
        lowerPrice = 30000
        upperPrice = 50000
          break;
          case 'Entre $50.000 y $80.000':
          lowerPrice = 50000
          upperPrice = 80000
            break;
            case 'Más de $80.000':
            lowerPrice = 80000
            upperPrice = 999999
              break;
      }

      if (category === "Todas" && charac === "Todas" && age === "Todas" && price === "Todas") {
        return vm.girls;

      } else {
        return vm.girls.filter(function(girly) {
          if(girly.weightescort && girly.characteristics && girly.birthdate && girly.price){
            var old = vm.getOlder(girly.birthdate)
            return  (category === 'Todas' || girly.weightescort.name === category)
             && (charac === 'Todas'  || girly.characteristics[0].name === charac)
             && (age === 'Todas' || old >= lower && old <= upper)
             && (price === 'Todas' || girly.price >= lowerPrice && girly.price <= upperPrice)
          }
        });
      }
    }
  },
  beforeMount() {
    this.baseUrl =  this.$axios.defaults.baseURL
    this.loadEscorts()
    this.loadCharacteristics()
    this.loadWeights()
  },
  mounted() {

  },
  filters: {
    getNames: function(value) {
      var names = ""
      for (var i = 0; i < value.length; i++) {
        var name = value[i].name
        name = name.split(' ');
        //do whatever you want with your date. transform.
        names += name + " " //push the final version of the date you want to store
      }
      return names
    },
    getAge: function(value) {
      var today = new Date();
      var birthDate = new Date(value);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  methods: {
    getOlder: function(value){
        var today = new Date();
        var birthDate = new Date(value);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
    },
    loadEscorts: function() {
      axios
      .get(this.$axios.defaults.baseURL + '/escorts', {
          params: {
            _sort: 'id:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
          }
        })
        .then(response => {
          // Handle success.
          //console.log('Well done, here is the list of posts: ', response.data);
          this.girls = response.data
          //this.girls.sort((a, b) => Math.random() > .5 ? -1 : 1);
          this.loadFirstGirls()
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadFirstGirls: function() {
      //this.girlsChunk = this.girls.slice(0, 5)
    },
    loadAmountEscorts: function(index) {
      var start = index * this.size
      var end = start + this.size
      var chunk = this.girls.slice(start, end)
      //this.girlsChunk.push(chunk)
      this.index++

    },
    loadCharacteristics: function() {
      axios
        .get(this.$axios.defaults.baseURL + '/characteristics')
        .then(response => {
          this.characteristics = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    loadWeights: function() {
      axios
        .get(this.$axios.defaults.baseURL + '/weightescorts')
        .then(response => {
          this.weights = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    },
    onChangeCharacteristic: function() {
      this.filterGirls()
    },
    onChangeWeight: function() {
      console.log(this.weight)
    },
    onChangeAge: function() {
      console.log(this.age)
    },
    onChangePrice: function() {
      console.log(this.price)
    },
    onChangeHeight: function() {
      console.log(this.height)
    },
    filterGirls: function() {
      axios
        .get(this.$axios.defaults.baseURL + '/escorts', {
          params: {
            'characteristics.name_in': this.characteristic
          }
        })
        .then(response => {
          this.girls = response.data
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error);
        });
    }
  }

}
</script>
