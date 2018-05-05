<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Hyperaudio 01844</span>
        <div class="mdl-layout-spacer"></div>
        <div style="">
          <router-link class="mdl-navigation__link" to="/favoriteView" @click.native="hideMenu">
            <button class="mdl-button mdl-js-button mdl-button--icon">
              <i class="material-icons">favorite</i>
            </button>
          </router-link>
        </div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Hyperaudio 01844</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/KE1" @click.native="hideMenu">KE1</router-link>
        <router-link class="mdl-navigation__link" to="/KE2" @click.native="hideMenu">KE2</router-link>
        <router-link class="mdl-navigation__link" to="/KE3" @click.native="hideMenu">KE3</router-link>
        <router-link class="mdl-navigation__link" to="/AbVerz" @click.native="hideMenu">Abbildungsverzeichnis</router-link>
        <router-link class="mdl-navigation__link" to="/StWortVerz" @click.native="hideMenu">Stichwortverzeichnis</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
       <router-view :key="$route.params.id"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  require('material-design-lite')
  require('bootstrap-vue')
  require('jplayer')
  export default {
    name: 'app',
    methods: {
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import '../node_modules/jplayer/dist/skin/blue.monday/css/jplayer.blue.monday.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>