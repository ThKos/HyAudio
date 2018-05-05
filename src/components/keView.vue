<template>
  <div>
    <modals-container/>
    <div class = "mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet KE-card mdl-card mdl-shadow--2dp">
      <!--<div class="KE-card mdl-card mdl-shadow--2dp">-->
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">Kurseinheit {{id + 1}}</h2>
        </div>
        <div class="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        <div id="infodiv"></div>
        <div id="imagediv"></div>
        </div>
        <div class="mdl-card__media mdl-card--border"><div>
          <audio controls="controls" v-on:canplay="setStartTime" id="myvideo" ref="myvideo">
          <source :src="audios[id].path" type="audio/mpeg"></source>Your browser does not support HTML5 video.</audio>
        </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="playpauseButton" v-on:click="playpauseVideo">
            Play/Pause
          </button>
          <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="jumpToButton" id="jumpToButton" v-on:click="jumpTo" disabled>
            Jump
          </button>
          <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="addFavButton" v-on:click="addFav">
            Add Fav
          </button>
          <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" ref="contact" v-on:click="sendMessage">
            Kontakt
          </button>
        </div>  
      </div>
  </div>
</template>

<script>
  import data from '../data'
  import favdialog from './addFavDialog'
  import contactdialog from './contactDialog'
 
  export default {
    created () {
      this.initialate()
    },
    mounted () {
      console.log('App mounted! startSecond = '+ this.startSecond)
      if (localStorage.getItem('favorites')) this.favorites = JSON.parse(localStorage.getItem('favorites'))
      console.log("This in mounted = "  + this.bingsoundpath)

      var vm = this;
      this.bingsound = new Audio(this.bingsoundpath)

      this.pop = Popcorn('#myvideo')

      switch(this.id){
        case 0:
          this.pop.code({
            start: 6,
            onStart: function () {
              vm.justBing()
            }
          }); 
          this.pop.timeline({
            start: 6,
            end: 11,
            target: "infodiv",
            title: "Zusatzinfo",
            text: "Hier ein wenig Zusatzinformationen",
            innerHTML: "Click here for <a href='http://www.bbc.co.uk/podcasts/'>further Information</a>",
            direction: "up"
          });
          this.pop.code({
            start: 20,
            end: 25,
            onStart: function () {
              vm.linkPrep(60,2)
            },
            onEnd: function () { 
              vm.linkDeact()
            }
          });   
        break;

        case 1:
        break;
        case 2:
          this.pop.code({
          start: 1,
          end: 3,
          onStart: function () {
            vm.linkPrep(60,2)
          },
          onEnd: function () { 
            vm.linkDeact()
          }
          })
          this.pop.code({
            start: 4,
            end: 6,
            onStart: function () {
              vm.linkPrep(3,1)
            },
            onEnd: function () { 
              vm.linkDeact()
            }
          })
          this.pop.image({
            start: 109,
            end: 139,
            src: this.pictures[0].path,
            target: "imagediv"
          });
        break;
      }
    },
    methods: {
      initialate () {
        this.id = this.$route.params.id
        this.startSecond = this.$route.params.startSecond
      },
      playpauseVideo () {
        this.bingsound.play()
        this.bingsound.pause()
        if (this.pop.paused()) {
          this.pop.play()
        } else {
          this.pop.pause()
        }
      },
      jumpTo () {
        if (this.jumpVideoID === this.id) {
          this.pop.currentTime(this.jumpTime)
        } else {
          this.$router.push({name: 'keView', params: { id: this.jumpVideoID, startSecond: this.jumpTime }})
        }
      },
      callDialog () {
        this.$refs.myvideo.pause()
        this.showDialog = true
      },
      addFav () {
        this.pop.pause()
        this.$modal.show(favdialog, {
          videoid: this.id,
          comment: '',
          second: this.$refs.myvideo.currentTime,
          plholder: 'trage deinen Kommentar ein'
        }, {
          adaptive: true
        })
      },
      closeModal () {
        this.$emit('close')
      },
      linkPrep (jT, vID) {
        document.getElementById("jumpToButton").disabled = false
        this.jumpTime = jT
        this.jumpVideoID = vID
        this.bingsound.play()
      },
      linkDeact() {
        document.getElementById("jumpToButton").disabled = true
      },
      justBing() {
        this.bingsound.play()
      },
      setStartTime () {
        if (this.initialPlay) return
        this.initialPlay = true
        console.log('canplay loaded ' + this.$refs.myvideo.currentTime)
        this.$refs.myvideo.currentTime = this.startSecond
      },
      sendMessage () {
        this.pop.pause()
        this.$modal.show(contactdialog, {
          videoid: this.id,
          comment: '',
          second: this.$refs.myvideo.currentTime,
          plholder: 'trage deine Nachricht ein'
        }, {
          adaptive: true
        })
      }
    },
    data () {
      return {
        startSecond: 0,
        video: '',
        comment: '',
        second: '',
        jumpTime: '',
        jumpVideoID: '',
        showDialog: false,
        isModalVisible: false,
        initialPlay: false,
        audios: data.audios,
        pictures: data.pictures,
        bingsoundpath: data.BingSoundPath,
        bingsound: '',
        favorites: data.favorites,
        newFavorite: data.newFavorite,
        pop: ''
      }
    },
    components: {
      favdialog
    }
  }
</script>

<style>
.mdl-card__media {
    left: 10;
    position: center;
    width: 100%;
    background-color: white;
    align-items: center;
    margin: auto;
  }
.mdl-card__media > audio {
    padding-left: 10px;
  }
</style>