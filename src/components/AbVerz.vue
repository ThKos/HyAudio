<template>
  <div>
    <div class="mdl-grid">
      <div v-for="pic in pictures" class="mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Abbildung 1</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <picture>
          <img :src="pictures[0].path" alt="Kofi Annan">
        </picture><br>
        Kofi Annan
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-bind:to="{ name: 'keView', params: { id: 2, startSecond:109 }}">Starten</router-link>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
  import data from '../data'
  export default {
    data () {
      return {
        pictures: data.pictures
      }
    }
  }
</script>

<style>
</style>