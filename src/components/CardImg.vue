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
    card.addEventListener("click", this.imagenCard, true);
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
      cardShet: [],
      carName: "",
      imagVisible: Boolean,
      imgOriginal: require("@/assets/img/black.png"),
      imgGoodChange: "",
      cardcheck1: 0,
      cardcheckTemporal: 0,
      imgestado: false,
      img: "",
      imgId: "imagen-src" + this.idCard,
      imgUrlChange: "",
      ImagenChecksElements: [],
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
          } else {
            alert("El juego a terminado en empate!");
          }
        }, 2000);
      }
    },
    imagenCard: function(event) {
      
      //event.target.removeEventListener("click",this.imagenCard,true);
      this.img = this.imgs2[this.imgRandom - 1].src;
      this.carName = this.imgs2[this.imgRandom - 1].name;
      event.target.src = this.img;
      
      this.$emit("alertParent", this.carName);
      this.$store.state.nombreCard.push(this.carName);
      this.$store.state.carDestapada.push(event.target);
      this.cardcheck1 = this.imgs2[this.imgRandom - 1].cardcheck;
      document.getElementById(event.target.id).style.pointerEvents="none";
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
          } else {
            this.imagVisible = false;
            this.$store.state.carDestapada[0].src = require("@/assets/img/black.png");
            this.$store.state.carDestapada[1].src = require("@/assets/img/black.png");
            console.log(this.$store.state.carDestapada[0].id);
            console.log(this.$store.state.carDestapada[1].id);
            document.getElementById(this.$store.state.carDestapada[0].id).style.pointerEvents="auto";
            document.getElementById(this.$store.state.carDestapada[1].id).style.pointerEvents="auto";
            this.$store.state.nombreCard = [];
            this.$store.state.carDestapada = [];
            this.cardcheckTemporal = "";
            this.cardcheck1 = "";
            this.$store.commit("ChangeJugadorActual");
            this.$store.commit("UpdatePoints");
          }
        }, 1200);
      } else {
        this.cardcheckTemporal = this.imgs2[this.imgRandom - 1].cardcheck;
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
