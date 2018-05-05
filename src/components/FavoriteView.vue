<template>
  <div>
    <div v-if="favorites.length === 0" class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
      <div class="mdl-card__supporting-text">
          Die Favoritenliste ist leer!
      </div>
    </div>
  </div>

	<div class="mdl-grid">
      <div v-for="fav in favorites" class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
	    <div class="mdl-card__title">
	        <h2 class="mdl-card__title-text">Kurseinheit {{ fav.videoid + 1 }} - Sekunde {{ fav.second }}</h2>
	    </div>
	    <div class="mdl-card__supporting-text">
	        {{ fav.comment }}
	    </div>
	    <div class="mdl-card__actions mdl-card--border">
	      <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-bind:to="{ name: 'keView', params: { id: fav.videoid, startSecond:fav.second }}">Starten</router-link>
        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="del" v-on:click="deleteFav(fav)">Löschen</button>
	    </div>
    </div>
	</div>
  </div>
</template>

<script>
  import data from '../data'
  export default {
    mounted () {
      if (localStorage.getItem('favorites')) this.favorites = JSON.parse(localStorage.getItem('favorites'))
    },
    data () {
      return {
        favorites: data.favorites,
        selected: [],
        checkboxid: 0
      }
    },
    watch: {
      favorites: {
        handler () {
          console.log('favorites changed!')
          localStorage.setItem('favorites', JSON.stringify(this.favorites))
        },
        deep: true
      }
    },
    methods: {
      deleteFav (fav) {
        this.favorites.splice(this.favorites.indexOf(fav), 1)
      }
    }
  }
</script>

<style>
.demo-list-control {
  width: 300px;
}

.demo-list-radio {
  display: inline;
}

.demo-list-action {
  width: 320px;
 }
</style>