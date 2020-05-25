<template>
  <div class="card-div" :id="idCard">
    <div>
      <cardimg
        :imgRandom="imagenCardFlid"
        :imagVisible="true"
        @click="onSendNameCard($event)"
        @alertParent="onAlertParent($event)"
        :idCard="idCard"
      ></cardimg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFlid",
  props: {
    idCard: Number,
    idImag: Number,
    imagenCardFlid: Number
  },
  data() {
    return {
      cardName: ""
    };
  },
  methods: {
    onAlertParent(name) {
      this.cardName = name;
    },
    onSendNameCard(name) {
      this.$emit("click", name);
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card-div {
  display: inline-flex;
  width: 100px;
  height: 100px;
  border: 3px solid red;
  margin: 0.5px 0.5px;
}
</style>
