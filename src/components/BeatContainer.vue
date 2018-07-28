<template>
  <div class="wrapper">
    <div class="container">
      <div class="row mb-5">

        <div class="col-md-4 col-sm-3">
          <beat-frame></beat-frame>   
        </div>

        <div class="col mt-4">
          <ul id="song-list" class="demo-list-three mdl-list">

            <li @click="(event) => { changeCurrentBeat(event, beat) }" v-for="beat in beats" v-bind:key="beat.id" class="mdl-list__item mdl-list__item--three-line">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>{{beat.data.Autor}}</span>
                <span class="mdl-list__item-text-body">
                  {{beat.data.Key}}
                </span>
              </span>
              <span class="mdl-chip">
                  <span class="mdl-chip__text">$29.99</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
              </span>
            </li>

          </ul>
        </div>
      </div>

      <hr class="mt-5 seperator">

      <div class="row player">

        <div class="col">

        </div>
        
        <div class="col-md-5 float-right">
          <app-player></app-player>
        </div>

        <div class="col">
          <form action="#">
            <div id="search-bar" class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
                <i class="material-icons">search</i>
              </label>
              <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" type="text" id="sample6">
                <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import appPlayer from "@/components/AudioPlayer";
import beatFrame from "@/components/BeatFrame";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      beats: "getBeatCollection"
    })
  },
  data() {
    return {};
  },
  mounted() {},
  components: {
    appPlayer,
    beatFrame
  },
  methods: {
    changeCurrentBeat(e, beat) {
      console.log(beat);
      this.$store.commit("setCurrentLoadedBeat", beat);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.63);
  margin-top: 8em;
  margin-bottom: 4em;
  height: 500px;
  background: linear-gradient(
    to bottom right,
    rgba(53, 73, 94),
    rgba(14, 20, 27, 0.952)
  );
}
#song-list {
  height: 350px;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(109, 109, 109);
  border-radius: 10px;
}

#song-list > li > span {
  color: rgb(184, 184, 184);
  cursor: pointer;
}
.mdl-list__item-text-body {
  color: gray;
}

.seperator {
  opacity: 0.1;
}

.mdl-chip__text {
  color: gray;
}
.time-left {
  color: whitesmoke;
  font-weight: bold;
  margin-top: 0.5em;
  font-size: 0.9em;
}
#search-bar {
  color: grey;
}
input {
  width: 200px;
}
@media screen and (max-width: 600px) {
  .container {
    margin-top: 0.2em;
    height: 100%;
    width: 100%;
    background-color: rgba(53, 73, 94);
  }

  .input {
    width: 600px;
  }
}
</style>
