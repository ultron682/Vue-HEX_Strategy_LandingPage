<template>
  <div class="container">
    <div class="head-content">
      <div class="left-content">
        <h1 class="title">HEX Strategy</h1>
        <h2 class="sub-title">Prosta i wciągająca gra strategiczna</h2>

        <ul class="desc-list">
          <li>turowa gra strategiczna z prostymi i przejrzystymi zasadami,</li>
          <li>taktyczna, nie zawsze osiągniesz zwycięstwo starymi metodami,</li>
          <li>
            Multiplayer PvP! Zmierz się z innymi graczami. Pokaż kto jest
            Zwycięzcą,
          </li>
          <li>
            wciągająca! Lubisz strategie? W HEX Strategy zostaniesz na dłużej.To
            jest pewne!
          </li>
        </ul>
      </div>

      <div class="right-content">
        <img class="desc-image" alt="Main Image" src="land-screen.png" />
      </div>
    </div>
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
  .head-content {
    display: flex;
    flex-direction: row;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }

    .left-content {
      width: 50%;
      height: 100%;

      @include media-breakpoint-down(sm) {
        width: 100%;
      }

      .title {
        font-size: 60px;
        color: $accent1;
        animation: slide-in-left  0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      .sub-title {
        font-size: 26px;
        display: inline-block;
        color: $accent2;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 25px;
          background-color: $accent2;
          animation: sub-title-anim 1.5s;
        }
      }

      .desc-list {
        width: calc(100% - 60px);
        text-align: left;
        margin: 0;
        color: $accent2;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

        li {
          margin-top: 10px;
        }
      }
    }

    .right-content {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: slit-in-vertical 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

      @include media-breakpoint-down(sm) {
        width: 100%;
      }

      .desc-image {
        width: 70%;
      }
    }
  }
}

@keyframes sub-title-anim {
  0% {
    width: 0%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
