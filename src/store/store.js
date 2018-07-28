import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beatCollection: {},
        mostRecent: {},
        mostPopular: {},
        currenLoadedBeat: {}
    },

    mutations: {
        setBeatCollection(state, arr) {
            // `state` is the local module state
            state.beatCollection = arr;
        },
        setCurrentLoadedBeat(state, beat) {
            state.currenLoadedBeat = beat;
            console.log(state.currenLoadedBeat);
        }
    },
    getters: {
        getBeatCollection(state) {
            return state.beatCollection;
        },
        getCurrentLoadedBeat(state) {
            return state.currenLoadedBeat;
        }
    },
    actions: {
        initBeats({ commit }) {
            fetch('http://localhost:9000/songs')
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {

                    commit('setBeatCollection', myJson);
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
});