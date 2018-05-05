<template>
  <div>
  <div class = "mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet KE-card mdl-card mdl-shadow--2dp">
      <!--<div class="KE-card mdl-card mdl-shadow--2dp">-->
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Kurseinheit 2</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <p>Inhalt</p>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:0 }}">2 Identität und Selbstrepräsentation</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:30 }}">2.1. Technische Betrachtung des Identitätsbegriffs</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:60}}">2.1.1. Definition von Identität</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:90 }}">2.1.2. Authentifizierung der Identität</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:120 }}">2.2. Soziologische Betrachtung des Identitätsbegriffs</router-link><br>
          <router-link v-bind:to="{ name: 'keView', params: { id: 1, startSecond:150 }}">2.2.1. Ich- und Selbstintegrität nach Mead</router-link><br>
        </div>
      </div>
  </div>
</template>

<script>
  
</script>

<style>
</style>