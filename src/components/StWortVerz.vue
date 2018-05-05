<template>
  <div>
  <div class = "mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet KE-card mdl-card mdl-shadow--2dp">
      <!--<div class="KE-card mdl-card mdl-shadow--2dp">-->
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Stichwortverzeichnis</h2>
        </div>
        <div class="mdl-card__supporting-text mdl-card--border">
          <p><b>A</b></p>
          <router-link v-bind:to="{ name: 'keView', params: { id: 2, startSecond:109 }}">Annan Kofi (Speech)</router-link>
        </div>
        <div class="mdl-card__supporting-text mdl-card--border">
          <p><b>B</b></p>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:32 }}">Better Speeking</router-link>
        </div>
        <div class="mdl-card__supporting-text mdl-card--border">
           <p><b>C</b></p>
        </div>
        <div class="mdl-card__supporting-text mdl-card--border">
           <p><b>D</b></p>
        </div>
        <div class="mdl-card__supporting-text mdl-card--border">
           <p><b>E</b></p>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:228 }}">Example: Beer Shop</router-link>
        </div>
      </div>
  </div>
</template>

<script>
  
</script>

<style>
</style>