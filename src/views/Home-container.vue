<template>
  <div>
    <Home />
  </div>
</template>>

<script lang="ts">
import Vue from 'vue'
import Home from '@/components/Home/Home.vue'
import Component from 'vue-class-component'

@Component({
  components: {
    Home
  }
})
export default class HomeContainer extends Vue {

}
</script>
