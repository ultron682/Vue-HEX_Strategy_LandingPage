<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #485461;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;
  text-align: center;
  overflow: hidden;
}

.content {
  min-height: calc(100vh - 161px);
}
</style>
