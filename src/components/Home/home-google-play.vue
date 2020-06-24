<template>
  <div class="container">
    <div class="head">
      <p class="title">Zagraj za damo</p>

      <p>Kliknij przycisk poniżej, aby pobrać HEX Strategy ze sklepu Google Play. To już czas, byś to ty zwyciężał!</p>
    </div>
    <a
      class="google-play-button"
      href="https://play.google.com/store/apps/details?id=com.HeksanDEV.HexanGO&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <img
        alt="pobierz z Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";

.container {
  .head {
    .title {
      font-size: 30px;
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
