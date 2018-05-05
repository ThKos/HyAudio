<template>
  <div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Anfrage stellen...</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <div>
        Video-ID: {{ videoid }} Sekunde: {{ second }}
      </div>
      <div class = "mdl-textfield mdl-js-textfield">
        <textarea class = "mdl-textfield__input" type = "text" rows =  "4" 
            id = "Kommentar" v-model="comment"></textarea>
        <label class = "mdl-textfield__label" for = "Kommentar"></label>
      </div>
      <div class="Success">
        {{ msg }}
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button id="show-dialog" type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-on:click="sendMessage">Anfrage stellen</button>
      <button id="show-modal" type="button" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" v-on:click="close">Schließen</button>
    </div>
  </div>
</template>

<script>
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
    mounted () {
      console.log('App mounted!')
    },
    methods: {
      close () {
        this.$emit('close')
      },
      sendMessage () {
        this.msg = 'Anfrage gestellt!'
      }
    },
    data () {
      return {
        // favorites: data.favorites
        msg: ''
      }
    }
  }
</script>
<style>
.Success {
  color:green;
}
</style>