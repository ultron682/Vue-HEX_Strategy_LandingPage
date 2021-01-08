<template>
  <div class="wrapper">
    <div show-anim="slide-from-right-anim" class="hidden-for-anim container el1">
      <div class="texts-content">
        <h1 class="title">Gather them all!</h1>
        <h2 class="sub-title">
          Currently there are 31 cards to collect. Each of them has its unique
          power. When you place a card from your deck on the board, the card will revive
          the unit that is hiding in it. When the unit is created
          nothing will stop her from obeying you. It is possible
          but that your opponent will want to take it away from you. How? Sam
          you will surely find out about it :)
        </h2>
      </div>

      <div class="image-content">
        <img class="desc-image" alt="Main Image" src="home/desc_cards.png" />
      </div>
    </div>

    <div show-anim="slide-from-left-anim" class="hidden-for-anim container el2">
      <div class="image-content">
        <img class="desc-image" alt="Main Image" src="home/home_levels.png" />
      </div>
      <div class="texts-content">
        <h1 class="title">Infinite number of levels</h1>
        <h2 class="sub-title">
          HEX Strategy stands out from other strategy games because
          The levels are practically infinite. Many interesting levels
          created by the community is already waiting for you in the Creative Mode.
        </h2>
      </div>
    </div>

    <div show-anim="slide-from-right-anim" class="hidden-for-anim container el1">
      <div class="texts-content">
        <h1 class="title">Multiplayer</h1>
        <h2 class="sub-title">
          Each duel is an opportunity to have a great gameplay and to prove yourself in
          battles. When playing in multiplayer mode, you may find that the tactics that
          you used in the campaign may not be successful compared to
          to fight against real players
        </h2>
      </div>

      <div class="image-content">
        <img class="desc-image" alt="Main Image" src="home/desc_cards.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HomeDescAdvantages extends Vue {}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";

.container {
  display: flex;
  flex-direction: row;
  padding-right: 15%;
  padding-left: 15%;
  padding-top: 5%;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  .texts-content {
    width: 65%;
    height: 100%;

    @include media-breakpoint-down(sm) {
      width: 100%;
    }

    .title {
      font-size: 35px;
      color: $accent1;
    }

    .sub-title {
      font-size: 20px;
      display: inline-block;
      color: $accent2;
    }
  }

  .image-content {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    @include media-breakpoint-down(sm) {
      width: 100%;
    }

    .desc-image {
      width: 70%;
    }
  }
}

.el2 {
  @include media-breakpoint-down(sm) {
    flex-direction: column-reverse;
  }
}
</style>
