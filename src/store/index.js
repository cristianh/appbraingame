import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombreCard: [],
    carDestapada: [],
    contadorPuntosJ1: 0,
    contadorPuntosJ2: 0,
    JugadorActual: ["usuario1", "usuario2"],
    PuntosJugadores: [0, 0],
    PuntosJugadorActual: 0,
    PlayerGameing: "",
    JugadorAPlaying: 0,
    contadorclick: 0,
    elementosEncontrados: 0,
    imgs2: [
        {
          name: "helado",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/helado.png?alt=media&token=47c7c406-6771-4d72-999e-76323727de8c",
          cardcheck: 1
        },
        {
          name: "dona",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/dona.png?alt=media&token=41b74802-6892-4a84-b371-6cd75c44853e",
          cardcheck: 1
        },
        {
          name: "empanedado",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/empanedado.png?alt=media&token=0947b7b3-ad13-4678-8bba-4c4dd592db9d",
          cardcheck: 1
        },
        {
          name: "hamburguesa",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/hamburguesa.png?alt=media&token=9de7c9b4-0b29-4f3a-a28b-caca56f27f6c",
          cardcheck: 1
        },
        {
          name: "pollito",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/pollito.png?alt=media&token=4de08867-8875-418d-b46b-eff666e04205",
          cardcheck: 1
        },
        {
          name: "pizza",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/pizza.png?alt=media&token=4b9a0fda-43c8-4985-95de-a5848348de57",
          cardcheck: 1
        },
        {
          name: "helado",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/helado.png?alt=media&token=47c7c406-6771-4d72-999e-76323727de8c",
          cardcheck: 2
        },
        {
          name: "dona",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/dona.png?alt=media&token=41b74802-6892-4a84-b371-6cd75c44853e",
          cardcheck: 2
        },
        {
          name: "empanedado",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/empanedado.png?alt=media&token=0947b7b3-ad13-4678-8bba-4c4dd592db9d",
          cardcheck: 2
        },
        {
          name: "hamburguesa",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/hamburguesa.png?alt=media&token=9de7c9b4-0b29-4f3a-a28b-caca56f27f6c",
          cardcheck: 2
        },
        {
          name: "pollito",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/pollito.png?alt=media&token=4de08867-8875-418d-b46b-eff666e04205",
          cardcheck: 2
        },
        {
          name: "pizza",
          src:
            "https://firebasestorage.googleapis.com/v0/b/proyecto-tienda-fd4bd.appspot.com/o/pizza.png?alt=media&token=4b9a0fda-43c8-4985-95de-a5848348de57",
          cardcheck: 2
        }
      ]
  },
  mutations: {
    incrementPuntos(state) {
      // mutate state

      if (state.JugadorAPlaying == 0) {
        state.contadorPuntosJ1++;
        state.PuntosJugadores[state.JugadorAPlaying] = state.contadorPuntosJ1;
        state.PuntosJugadorActual =
          state.PuntosJugadores[state.JugadorAPlaying];
      } else {
        state.contadorPuntosJ2++;
        state.PuntosJugadores[state.JugadorAPlaying] = state.contadorPuntosJ2;
        state.PuntosJugadorActual =
          state.PuntosJugadores[state.JugadorAPlaying];
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
    UpdatePoints(state) {
      state.PuntosJugadorActual = state.PuntosJugadores[state.JugadorAPlaying];
    },
    aumentarElementosEncontrados(state) {
      state.elementosEncontrados++;
    },
    contadorClicks(state) {
      state.contadorclick++;
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
