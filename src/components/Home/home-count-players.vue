<template>
  <div class="container">
    <p>Jest nas już {{ playerCount }}</p>
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
      .then(data => { this.playerCount = Number.parseInt(data) });
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";

.container {
  width: 100%;
}
</style>
