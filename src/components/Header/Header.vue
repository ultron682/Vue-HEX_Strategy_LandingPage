<template>
  <div class="header">
    <img v-bind:src="'../hex_strategy_logo.png'" />
    <div class="tabs">
      <router-link to="/">
        <button class="tab">Strona główna</button>
      </router-link>
      <router-link to="/screens">
        <button class="tab">Zrzuty ekranu</button>
      </router-link>
      <router-link to="/contact">
        <button class="tab">Kontakt</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";

.header {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 80%;
    margin-left: 5%;

    // @include media-breakpoint-down(sm) {
    //   margin-left: 0;
    // }
  }

  .tabs {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5%;

    .tab {
      height: 40px;
      padding: 10px;
      border: 0;
      margin-right: 10px;
      margin-left: 10px;
      background: transparent;
      transition: 0.2s;
      border-radius: 25px;
      outline: 0;
      cursor: pointer;
      color: white;
      font-size: 18px;

      &:hover {
        background: #0f65d670;
      }
    }
  }
}
</style>