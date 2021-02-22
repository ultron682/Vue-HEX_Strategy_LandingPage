<template>
  <div class="header">
    <router-link to="/">
      <img class="logo" v-bind:src="'../icon.png'" />
    </router-link>

    <div class="view-pc">
      <div class="tabs">
        <router-link to="/">
          <button class="tab">Home page</button>
        </router-link>
        <router-link to="/gameplay">
          <button class="tab">Gameplay</button>
        </router-link>
        <router-link to="/contact">
          <button class="tab">Contact</button>
        </router-link>
      </div>
    </div>

    <div class="view-mobile">
      <button
        @click="onMenuClick"
        v-bind:class="{ 'hamburger--active': isActive }"
        class="hamburger"
        aria-label="Menu"
      >
        <span class="hamburger__container" tabindex="-1">
          <span class="hamburger__bars"></span>
        </span>
      </button>

      <div
        class="mobile-menu tilt-in-fwd-tr"
        v-bind:class="{ 'mobile-menu--active': isActive }"
      >
        <div class="list-container">
          <div class="list-element">
            <router-link to="/">
              <button @click="onMenuClick" class="tab">Home page</button>
            </router-link>
          </div>
          <div class="list-element">
            <router-link to="/gameplay">
              <button @click="onMenuClick" class="tab">Gameplay</button>
            </router-link>
          </div>
          <div class="list-element">
            <router-link to="/contact">
              <button @click="onMenuClick" class="tab">Contakt</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  isActive = false;

  onMenuClick() {
    this.isActive = !this.isActive;
  }
}
</script>
<style src="./Header.scss" lang="scss" scoped></style>
