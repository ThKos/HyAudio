<template>
  <div>
  <div class = "mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet KE-card mdl-card mdl-shadow--2dp">
      <!--<div class="KE-card mdl-card mdl-shadow--2dp">-->
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Kurseinheit 1</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <p>Inhalt</p>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:0 }}">1 Identität und Selbstrepräsentation</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:60 }}">1.1. Technische Betrachtung des Identitätsbegriffs</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:120 }}">1.1.1. Definition von Identität</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:180 }}">1.1.2. Authentifizierung der Identität</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:240 }}">1.2. Soziologische Betrachtung des Identitätsbegriffs</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 0, startSecond:300 }}">1.2.1. Ich- und Selbstintegrität nach Mead</router-link><br>
        </div>
      </div>
  </div>
</template>

<script>
  
</script>

<style>
</style>