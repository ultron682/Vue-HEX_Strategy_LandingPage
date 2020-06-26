<template>
  <div class="container">
    <div class="text-holder">
      <p>Jest nas już {{ playerCount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeCountPlayers extends Vue {
  playerCount: number = 0;

  created() {
    this.pullPlayerCount();
  }

  pullPlayerCount() {
    fetch("http://hexango.vxm.pl/api/getPlayersCount.php")
      .then(response => response.text())
      .then(data => {
        this.playerCount = Number.parseInt(data);
      });
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";
@import "@/scss/_animations.scss";

.container {
  width: 100%;
  animation: opacity-in 0.45s ease-out both;
  animation-delay: 1.2s;
  opacity: 0%;

  .text-holder {
    width: 280px;
    border: double 4px transparent;
    border-radius: 80px;
    background-image: linear-gradient($background-main, $background-main),
      radial-gradient(circle at top left, #f00, #3020ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin: auto;

    p {
      margin: 0;
      display: inline-block;
      padding-right: 10%;
      padding-left: 10%;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 20px;
    }
  }
}
</style>
