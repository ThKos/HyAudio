<template>
  <main class = "mdl-layout__content">    
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Kurseinheit 1</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"" to="/KE1">Starten</router-link>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Kurseinheit 2</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/KE2">Starten</router-link>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone card-lesson mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Kurseinheit 3</h2>
      </div>
      <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"" to="/KE3">Starten</router-link>
      </div>
    </div>
    </div>
  </main>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.card-lesson {
  margin: 5px;
  min-width: 200px;
  min-height: 100px;
  & > .mdl-card__actions {
    display: flex;
    box-sizing: border-box;
    align-items: center;
  }
  & > .mdl-card__media {
    max-width:100%;
    max-height:100%;
    box-sizing: border-box;
    align-items: center;
    background: grey;
  }
  & > .mdl-card__title {
    align-items: flex-start;
    & > h4 {
      margin-top: 0;
    }
  }
  & > .mdl-card__title,
  & > .mdl-card__supporting-text,
  & > .mdl-card__actions,
  & > .mdl-card__actions > .mdl-button {
    color: #fff;
  }
}
</style>
