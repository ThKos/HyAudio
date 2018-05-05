<template>
  <div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Favorit hinzufügen...</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <div>
        Video-ID: {{ videoid }} Sekunde: {{ second }}
      </div>
      <div class = "mdl-textfield mdl-js-textfield">
        <textarea class = "mdl-textfield__input" type = "text" rows =  "3" 
            id = "Kommentar" v-model="comment"></textarea>
        <label class = "mdl-textfield__label" for = "Kommentar"></label>
      </div>
      <div class="Success">
        {{ msg }}
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button id="show-dialog" type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-on:click="addFav">Favorit hinzufügen</button>
      <button id="show-modal" type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-on:click="close">Schließen</button>
    </div>
  </div>
</template>

<script>
  import data from '../data'
  export default{
    props: {
      title: '',
      plholder: '',
      comment: '',
      second: '',
      videoid: ''
    },
    ready () {
      this.$el.showModal()
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
    mounted () {
      console.log('App mounted!')
      if (localStorage.getItem('favorites')) this.favorites = JSON.parse(localStorage.getItem('favorites'))
    },
    methods: {
      close () {
        this.$emit('close')
      },
      addFav () {
        this.favorites.push({comment: this.comment, second: this.second, videoid: this.videoid})
        this.msg = 'Favorit erfolgreich hinzugefügt!'
      }
    },
    data () {
      return {
        // favorites: data.favorites
        favorites: data.favorites,
        msg: ' '
      }
    }
  }
</script>
<style>
.Success {
  color:green;
}
</style>