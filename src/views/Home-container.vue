<template>
  <div>
    <HomeDesc />
    <HomeGooglePlay />
    <HomeCountPlayers />
  </div>
</template>>

<script lang="ts">
import Vue from 'vue'
import HomeDesc from '@/components/Home/home-desc.vue'
import Component from 'vue-class-component'
import HomeGooglePlay from '@/components/Home/home-google-play.vue'
import HomeCountPlayers from '@/components/Home/home-count-players.vue'

@Component({
  components: {
    HomeDesc,
    HomeGooglePlay,
    HomeCountPlayers
  }
})
export default class HomeContainer extends Vue {

}
</script>
