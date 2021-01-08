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
    Footer,
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "animations-scroll.js");
    document.head.appendChild(recaptchaScript);
  },
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

// Dodanie tej klasy spowoduje odpalenie domyślnej animacji, gdy element pojawi się w viewport
.hidden-for-anim {
  opacity: 0;
}

.slide-from-left-anim {
  animation: slide-from-left 0.5s;
}

@keyframes slide-from-left {
  from {
    opacity: 0;
    transform: translate(-100px);
  }
  to {
    opacity: 1;
  }
}

.slide-from-right-anim {
  animation: slide-from-right 0.5s;
}

@keyframes slide-from-right {
  from {
    opacity: 0;
    transform: translate(100px);
  }
  to {
    opacity: 1;
  }
}
</style>
