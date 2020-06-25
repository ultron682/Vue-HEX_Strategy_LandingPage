<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeCountPlayers extends Vue {
 
 pullPlayerCount () {
 fetch("https://api.npms.io/v2/search?q=vue")
    .then(response => response.json())
    .then(data => (console.log(data)));
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
