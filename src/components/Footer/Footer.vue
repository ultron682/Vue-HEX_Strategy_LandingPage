<template>
  <div class="footer-container">
    <p>media społecznościowe</p>
    <div class="mobile-menu-social-media-items">
      <a
        href="https://www.facebook.com/hexangogame"
        target="_blank"
      >
        <i class="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UC0bimHez-W_7BQKRtKRtndw?view_as=subscriber&fbclid=IwAR0LDlaAK20yZzJnHA3q4Rj0YuFw98HQ87CxEUimgM5tLAKVY2haczYfvD8"
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

.footer-container {
  width: 100%;
  height: 100px;
}
</style>
