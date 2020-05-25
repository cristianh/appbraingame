<template>
  <div>
    <h1>Board-Game</h1>

    <ventanaprop></ventanaprop>
    <div id="board-game">
      <cardflid
        v-for="(n, index, key) in 12"
        @onsendName="click"
        :imagenCardFlid="numberRamdomImg[n - 1]"
        :idImag="n"
        :idCard="n"
        :key="key"
        >Card {{ n }}</cardflid
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardGame",
  props: {
    id: String
  },
  created() {
    this.numberRamdomImg.sort(() => 0.5 - Math.random(1, 12));
  },
  data() {
    return {
      numberRamdomImg: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  methods: {
    click(name) {
      console.log(".................." + name);
      this.CardNameSheet[0] = name;
      console.log("...................", this.CardNameSheet.length);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#board-game {
  width: 322px;
  height: 449px;
  border: 5px solid green;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 10px 10px;
}
</style>
