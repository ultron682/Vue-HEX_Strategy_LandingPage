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
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #485461;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;
  min-height: 100vh;
  text-align: center;
}

.content {
  min-height: calc(100vh - 160px);
}
</style>
