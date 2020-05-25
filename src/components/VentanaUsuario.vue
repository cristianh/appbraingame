<template>
  <div>
    Jugador actual:{{
      this.$store.state.PlayerGameing != null
        ? this.$store.state.PlayerGameing
        : "Usuario"
    }}
    - Puntos Jugador: {{ this.$store.state.PuntosJugadorActual }}
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "VentanaUsuario",
  props: {
    Nombre: String
  },
  data() {
    return {
      mensajeUsuario1: "",
      nombreUsuario1: "Jugador1",
      mensajeUsuario2: "",
      nombreUsuario2: "Jugador2"
    };
  },
  beforeCreate() {},
  mounted() {
    if (this.mensajeUsuario1 == "") {
      this.mensajeUsuario1=window.prompt("Usuario 1");
      if(this.mensajeUsuario1==""){
        this.$store.state.JugadorActual[0] = "Jugador1";
      }else{
        this.$store.state.JugadorActual[0] = this.mensajeUsuario1;
      }
    }

    if (this.mensajeUsuario2 == "") {
      this.mensajeUsuario2=window.prompt("Usuario 2");
      if(this.mensajeUsuario2==""){
       this.$store.state.JugadorActual[1] = "Jugador2";
      }else{
        this.$store.state.JugadorActual[1] = this.mensajeUsuario2;
      }
    }

    this.$store.commit(
      "ChangeJugadorActual",
      this.$store.state.JugadorActual[0]
    );
  },
  computed: {}
};
</script>

<style lang="less"></style>
