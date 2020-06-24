<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3988d3+0,15d2d8+100 */
  background: #3988d3; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #3988d3 0%,
    #15d2d8 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #3988d3 0%,
    #15d2d8 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #3988d3 0%,
    #15d2d8 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3988d3', endColorstr='#15d2d8',GradientType=1 ); /* IE6-9 */
  color: white;
  min-height: 100vh;
}
</style>
