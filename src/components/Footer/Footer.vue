<template>
  <div class="footer-container">
    <div class="mobile-menu-social-media-items">
      <a href="https://www.facebook.com/hexangogame" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCd3aQRYfEiwtqw9O0QWPtzg/featured"
        target="_blank"
      >
        <i class="fab fa-youtube"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";

.footer-container {
  width: 100%;
  height: 55px;
  font-size: 40px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 5px;
    position: absolute;
    top: -10px;
    left: 0;
    background-color: $accent1;
  }

  .mobile-menu-social-media-items {
    margin-top: 20px;
  }

  a {
    margin: 10px;
  }

  i {
    color: $accent1;
  }
}
</style>
