<template>
  <div class="wrapper">
    <div class="container el1">
      <div class="texts-content">
        <h1 class="title">Zbierz je wszystkie!</h1>
        <h2 class="sub-title">
          Aktualnie do zebrania jest 40 kart. Każda z nich ma swoją unikalną
          moc. Gdy umieścisz kartę ze swojej talii na planszy, karta ożywi
          jednostkę, która się w niej skrywa. Gdy jednostka zostanie stworzona
          nic jej już nie zatrzyma, by posłusznie Ci służyła. Możliwe jest
          jednak, że przeciwnik będzie chciał Ci ją odebrać. W jaki sposób? Sam
          się na pewno o tym przekonasz :)
        </h2>
      </div>

      <div class="image-content">
        <img class="desc-image" alt="Main Image" src="home/desc_cards.png" />
      </div>
    </div>

    <div class="container el2">
      <div class="image-content">
        <img class="desc-image" alt="Main Image" src="home/desc_cards.png" />
      </div>

      <div class="texts-content">
        <h1 class="title">Nieskończona ilość poziomów</h1>
        <h2 class="sub-title">
          HEX Strategy wyróżnia się tym na tle innych gier strategicznych, że
          poziomów jest praktycznie nieskończona ilość. Wiele ciekawych poziomów
          stworzonych przez społeczność już czeka na ciebie w Trybie Kreatywnym.
        </h2>
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
@import "@/scss/_animations.scss";

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

.el1 {
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.el2 {
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
