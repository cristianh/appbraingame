<template>
  <div>
    <img :id="imgId" :src="imgestado ? imgOriginal : img" />
  </div>
</template>

<script>
export default {
  name: "CardImagen",
  props: {
    imgCard: String,
    idCard: Number,
    imgRandom: Number
  },
  mounted() {
    //this.img = this.imgs2[this.imgRandom-1].src
    let card = document.getElementById(this.imgId);
    console.log(card);
    card.addEventListener("mouseup", this.imagenCard, true);
    card.addEventListener("mousedown", this.bloquarbotons, true);
  },
  created() {
    this.img = this.imgOriginal;
  },
  updated: function() {
    console.log(this.img);
  },
  data() {
    return {
      car1: "",
      car2: "",
      carName: "",
      imagVisible: Boolean,
      imgOriginal: require("@/assets/img/black.png"),
      cardcheck1: 0,
      cardcheckTemporal: 0,
      imgestado: false,
      img: "",
      imgId: "imagen-src" + this.idCard
    };
  },
  destroyed() {
    this.img = "";
  },
  methods: {
    verificarGanador() {
      if (this.$store.state.elementosEncontrados == 6) {
        alert(
          "Puntos Jugador " +
            this.$store.state.JugadorActual[1] +
            ": " +
            this.$store.state.PuntosJugadores[0] +
            "\n" +
            "Puntos Jugador " +
            this.$store.state.JugadorActual[0] +
            ": " +
            this.$store.state.PuntosJugadores[1]
        );
        setTimeout(() => {
          if (
            this.$store.state.PuntosJugadores[0] >=
            this.$store.state.PuntosJugadores[1]
          ) {
            alert("El ganador es: " + this.$store.state.JugadorActual[1]);
          } else if (
            this.$store.state.PuntosJugadores[0] <=
            this.$store.state.PuntosJugadores[1]
          ) {
            alert("El ganador es: " + this.$store.state.JugadorActual[0]);
          } else if (
            this.$store.state.PuntosJugadores[0] ==
            this.$store.state.PuntosJugadores[1]
          ) {
            alert("El juego a terminado en empate!");
          } else {
            alert("No hay ganador.!");
          }
        }, 2000);
      }
    },
    bloquarbotons() {},
    imagenCard(event) {
     
      this.cardcheck1 = this.$store.state.imgs2[this.imgRandom - 1].cardcheck;
      this.$store.commit("contadorClicks");
      console.log(this.$store.state.contadorclick);
      if (this.$store.state.contadorclick == 1) {
         document.getElementById(event.target.id).style.pointerEvents = "none";
        this.img = this.$store.state.imgs2[this.imgRandom - 1].src;
        this.carName = this.$store.state.imgs2[this.imgRandom - 1].name;
        event.target.src = this.img;
        this.$emit("alertParent", this.carName);
        this.$store.state.nombreCard.push(this.carName);
        this.$store.state.carDestapada.push(event.target);
       
      }

      if (this.$store.state.contadorclick == 2) {
        this.img = this.$store.state.imgs2[this.imgRandom - 1].src;
        this.carName = this.$store.state.imgs2[this.imgRandom - 1].name;
        event.target.src = this.img;
        this.$emit("alertParent", this.carName);
        this.$store.state.nombreCard.push(this.carName);
        this.$store.state.carDestapada.push(event.target);
        
       
     
        //this.contadorclick=0;
        this.imgestado = true;
        if (this.$store.state.nombreCard.length == 2) {
          console.log(this.cardcheck1 + " " + this.cardcheckTemporal);
          console.log("entra");
          setTimeout(() => {
            this.car1 = this.$store.state.nombreCard[0];
            this.car2 = this.$store.state.nombreCard[1];
            if (this.car1 === this.car2) {
              this.$store.commit("incrementPuntos");
              this.$store.state.carDestapada[0].src = require("@/assets/img/finish.png");
              this.$store.state.carDestapada[1].src = require("@/assets/img/finish.png");
              this.$store.state.nombreCard = [];
              this.$store.state.carDestapada = [];
              this.cardcheckTemporal = "";
              this.cardcheck1 = "";
              this.$store.commit("aumentarElementosEncontrados");
              this.verificarGanador();
              this.$store.state.contadorclick = 0;
            } else {
              this.imagVisible = false;
              this.$store.state.carDestapada[0].src = require("@/assets/img/black.png");
              this.$store.state.carDestapada[1].src = require("@/assets/img/black.png");
              console.log(this.$store.state.carDestapada[0].id);
              console.log(this.$store.state.carDestapada[1].id);
              document.getElementById(
                this.$store.state.carDestapada[0].id
              ).style.pointerEvents = "auto";
              document.getElementById(
                this.$store.state.carDestapada[1].id
              ).style.pointerEvents = "auto";
              this.$store.state.nombreCard = [];
              this.$store.state.carDestapada = [];
              this.cardcheckTemporal = "";
              this.cardcheck1 = "";
              this.$store.commit("ChangeJugadorActual");
              this.$store.commit("UpdatePoints");
              this.$store.state.contadorclick = 0;
            }
          }, 1200);
        } else {
          this.cardcheckTemporal = this.$store.state.imgs2[
            this.imgRandom - 1
          ].cardcheck;
        }
      }
    },
    cambiarJugador() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.img {
  text-align: center;
}
</style>
