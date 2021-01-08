<template>
  <div class="container">
    <div class="head">
      <p class="title">Play for free</p>

      <p class="sub-title">
        Click the button below to download HEX Strategy from the Google Play store.
        It is time for you to win!
      </p>
    </div>
    <a
      class="google-play-button"
      href="https://play.google.com/store/apps/details?id=com.HeksanDEV.HexanGO&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <img
        alt="pobierz z Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";
@import "@/scss/_animations.scss";

.container {
  padding-top: 4%;
  padding-right: 15%;
  padding-left: 15%;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .head {
    .title {
      font-size: 30px;
      font-weight: 600;
      color: $accent1;
    }

    .sub-title {
      color: $accent2;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .google-play-button {
    width: 200px;

    img {
      width: inherit;
      height: inherit;
    }
  }
}
</style>
