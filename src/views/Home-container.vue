<template>
  <div>
    <HomeDesc />
    <HomeGooglePlay />
  </div>
</template>>

<script lang="ts">
import Vue from 'vue'
import HomeDesc from '@/components/Home/home-desc.vue'
import Component from 'vue-class-component'
import HomeGooglePlay from '@/components/Home/home-google-play.vue'

@Component({
  components: {
    HomeDesc,
    HomeGooglePlay
  }
})
export default class HomeContainer extends Vue {

}
</script>
