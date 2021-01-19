<template>
  <div>
    <HomeDesc />
    <HomeGooglePlay />
    <HomeCountPlayers />
    <HomeDescAdvantages />
  </div>
</template>>

<script lang="ts">
import Vue from "vue";
import HomeDesc from "@/components/Home/home-desc.vue";
import Component from "vue-class-component";
import HomeGooglePlay from "@/components/Home/home-google-play.vue";
import HomeCountPlayers from "@/components/Home/home-count-players.vue";
import HomeDescAdvantages from "@/components/Home/home-desc-advantages.vue";
import animateHtml from "@/animations-scroll.js";

@Component({
  components: {
    HomeDesc,
    HomeGooglePlay,
    HomeCountPlayers,
    HomeDescAdvantages,
  },
  mounted() {
    animateHtml();
    console.log(1212);
  },
})
export default class HomeContainer extends Vue {}
</script>
