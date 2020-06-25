<template>
  <div class="header">
    <router-link to="/">
      <img class="logo" v-bind:src="'../icon.png'" />
    </router-link>

    <div class="view-pc">
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
              <button @click="onMenuClick" class="tab">Strona główna</button>
            </router-link>
          </div>
          <div class="list-element">
            <router-link to="/screens">
              <button @click="onMenuClick" class="tab">Zrzuty ekranu</button>
            </router-link>
          </div>
          <div class="list-element">
            <router-link to="/contact">
              <button @click="onMenuClick" class="tab">Kontakt</button>
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

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";
@import "@/scss/_global.scss";

.header {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 5px;
    position: absolute;
    top: 65px;
    background-color: $accent1;
  }

  .logo {
    height: 50px;
    border-radius: 18px;
    margin-left: 18%;
  }

  .view {
    &-pc {
      @include media-breakpoint-down(sm) {
        display: none;
      }

      .tabs {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-right: 5%;

        .tab {
          width: 100%;
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
          color: $accent1;
          font-size: 18px;
          font-weight: 500;

          &:hover {
            background: #0b162570;
          }
        }

        .router-link-exact-active {
          position: relative;
        }

        .router-link-exact-active::after {
          content: "";
          width: 100%;
          height: 4px;
          position: absolute;
          background-color: $accent1;
          bottom: 0px;
          left: 0px;
          margin-left: 10px;
          border-radius: 25px;
        }
      }
    }
    &-mobile {
      display: none;
      margin-right: 18px;

      @include media-breakpoint-down(sm) {
        display: block;
      }

      .hamburger {
        z-index: 100;
        position: relative;
        margin: 0;
        padding: 0;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        &:focus {
          & > .hamburger__container {
            box-shadow: 0 0 2px 2px #51a7e8;
          }
        }
      }

      .hamburger__container {
        display: flex;
        align-items: center;
        position: relative;
        width: 35px;
        height: 30px;
      }

      .hamburger__bars {
        position: absolute;
        width: 35px;
        height: 3px;
        background-color: $accent1;
        transition: transform 220ms ease-in-out;
        &:before,
        &:after {
          display: block;
          position: absolute;
          width: 35px;
          height: 3px;
          background-color: $accent1;
          content: "";
        }
        &:before {
          top: -12px;
          transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
        }
        &:after {
          bottom: -12px;
          transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
        }
      }

      .hamburger--active {
        position: fixed;
        right: 20px;
        top: 18px;

        .hamburger__bars {
          transform: rotate(225deg);
          transition: transform 220ms 120ms ease-in-out;
          &:before {
            top: 0;
            transition: top 100ms ease-out;
          }
          &:after {
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
          }
        }
      }

      .hamburger,
      .hamburger__container {
        &:focus {
          outline: none;
        }
      }

      .mobile-menu {
        display: none;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 5;
        //background-image: url("/hex_grid.png");
        background: #485461;
        background-color: linear-gradient(315deg, #485461 0%, #28313b 74%);
        left: 0;
        top: 0;
        overflow: hidden;

        &--active {
          display: block;
        }

        .list-container {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .list-element {
            button {
              position: relative;
              border: none;
              background-color: #ff9900;
              color: #ffffff;
              text-transform: uppercase;
              font-size: 20px;
              font-weight: 600;
              padding: 10px;
              border-radius: 25px;
              margin: 10px;
            }
          }
        }
      }
    }
  }
}

.tilt-in-fwd-tr {
  -webkit-animation: tilt-in-fwd-tr 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: tilt-in-fwd-tr 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2020-6-24 20:29:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tilt-in-fwd-tr
 * ----------------------------------------
 */
@-webkit-keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-fwd-tr {
  0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
      skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
</style>
