<template>
  <!-- holds buttons and bars -->
  <div id="player">
    <audio @timeupdate="songTime = $event.target.currentTime" ref="audio" id="custom-player">
      <source v-if="Object.keys(beat).length !== 0" v-bind:src="beat.data.Location" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
    <i id="prev" style="font-size: 1.1em" class="fas fa-angle-double-left"></i>
    <div class="mdl-tooltip mdl-tooltip--top" data-mdl-for="prev">Prev</div>

    <i @click="playSong" id="play" class="fas" v-bind:class="{ 'fa-play': !this.isPlayed, 'fa-pause': this.isPlayed, }"></i>
    <div class="mdl-tooltip mdl-tooltip--top" data-mdl-for="play">Play</div>

    <i id="next" style="font-size: 1.1em" class="fas fa-angle-double-right"></i>
    <div class="mdl-tooltip mdl-tooltip--top" data-mdl-for="next">Next</div>

    <span class="time-left float-right">{{songTimeInSeconds}}</span>
    <i @mouseover="showVolume = true" id="volume" style="font-size: 1em" class="float-right mr-4 fas fa-volume-up"></i>
    <div v-bind:class="{'is-active': showVolume}" id="volume-controller">

      <!-- Slider with Starting Value -->
      <input @change="volumeChanged" @mouseout="showVolume = false" class="mdl-slider mdl-js-slider" type="range"
             min="0" v-bind:value="volume" max="100" tabindex="0">
    </div>
    <span>
        <div @click="changeProgress" class="progress">
          <div id="timestamp" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
               aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
               v-bind:style="{ width: progressBarValue.toFixed(2) + '%' }"></div>
        </div>
        </span>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    watch: {
      songTime(songTime) {
        this.progressBarValue =
          this.$refs.audio.currentTime / this.$refs.audio.duration * 100;

        this.songTimeInSeconds = this.convertTime(this.songTime.toFixed());
      }
    },

    computed: {
      beat() {
        const tempBeat = this.$store.getters.getCurrentLoadedBeat;

        if (Object.keys(tempBeat).length !== 0) {
          document.getElementById("custom-player").src = tempBeat.data.Location;

          this.player.play();
          this.isPlayed = true;
        }
        return tempBeat;
      }
    },

    methods: {
      playSong () {
        if (!this.isPlayed) {
          this.player.play();
        } else {
          this.player.pause();
        }
        this.isPlayed = !this.isPlayed;
      },

      changeProgress(e) {
        const $this = $(e.target);
        // to get part of width of progress bar clicked
        const widthclicked = e.pageX - $this.offset().left;
        const totalWidth = $this.width(); // can also be cached somewhere in the app if it doesn't change

        // do calculation of the seconds clicked
        const calc = widthclicked / totalWidth * this.$refs.audio.duration; // get the percent of bar clicked and multiply in by the duration

        this.songTime = calc;
        this.player.currentTime = calc;
      },

      volumeChanged(e) {
        this.player.volume = e.target.value / 100;
        this.volume = this.player.volume;
      }
    },

    mounted() {
      this.player = document.getElementById("custom-player");
      this.player.volume = 0.5;
    },

    data() {
      return {
        isPlayed: false,
        songTime: 0,
        songTimeInSeconds: "00:00",
        progressBarValue: 0,
        player: null,
        showVolume: false,
        volume: 50,
        convertTime: (seconds) => {
          let s = seconds,
            h = Math.floor(s / 3600);
          s -= h * 3600;
          let m = Math.floor(s / 60);
          s -= m * 60;

          if (seconds >= "3600") {
            return (
              "0" +
              h +
              ":" +
              (m < 10 ? "0" + m : m) +
              ":" +
              (s < 10 ? "0" + s : s)
            );
          } else {
            return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
          }
        }
      };
    },
  };
</script>

<style scoped>
  .fas {
    color: whitesmoke;
    font-size: 1.2em;
    cursor: pointer;
    margin-right: 0.5em;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.609);
  }

  .progress {
    height: 12px;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
  }

  .time-left {
    color: darkgrey;
    padding-right: 10px;
  }

  @media screen and (max-width: 600px) {
    #player {
      padding: 20px;
      background-color: rgb(27, 37, 48);
      position: fixed;
      top: 84%;
      left: 0%;
      width: 100%;
      height: 10em;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
    }

    .fa-volume-up {
      float: none !important;
    }
  }

  .is-active {
    display: block !important;
  }

  #volume-controller {
    position: absolute;
    display: none;
    top: -70%;
    left: 60%;
    padding: 10px;
    background-color: #5d565c;
    border-radius: 2px;
  }
</style>
