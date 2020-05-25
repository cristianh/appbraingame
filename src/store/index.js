import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombreCard: [],
    carDestapada: [],
    contadorPuntosJ1: 0,
    contadorPuntosJ2: 0,
    JugadorActual: ['usuario1','usuario2'],
    PuntosJugadores: [0, 0],
    PuntosJugadorActual: 0,
    PlayerGameing: "",
    JugadorAPlaying: 0,
    elementosEncontrados:0
  },
  mutations: {
    incrementPuntos(state) {
      // mutate state
      
      if (state.JugadorAPlaying == 0) {
        state.contadorPuntosJ1++;
        state.PuntosJugadores[state.JugadorAPlaying] = state.contadorPuntosJ1;
        state.PuntosJugadorActual = state.PuntosJugadores[state.JugadorAPlaying];
      }else{
        state.contadorPuntosJ2++;
        state.PuntosJugadores[state.JugadorAPlaying] = state.contadorPuntosJ2;
        state.PuntosJugadorActual = state.PuntosJugadores[state.JugadorAPlaying];
      }
      
      
    },
    ChangeJugadorActual(state) {
       
      if (state.JugadorAPlaying == 0) {
        state.PlayerGameing = state.JugadorActual[state.JugadorAPlaying];
        
        state.JugadorAPlaying++;
      } else {
        state.PlayerGameing = state.JugadorActual[state.JugadorAPlaying];
       
        state.JugadorAPlaying--;
      }
    },
    UpdatePoints(state){
        state.PuntosJugadorActual =
        state.PuntosJugadores[state.JugadorAPlaying];
    },
    aumentarElementosEncontrados(state){
      state.elementosEncontrados++;
    }
  },
  getters: {
    Jugador: state => {
      return state.JugadorActual[0];
    }
  },
  actions: {},
  modules: {}
});
