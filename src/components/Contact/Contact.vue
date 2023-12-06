<template>
  <div>
    <p class="title">Contact</p>
    <p class="contact">Email: heksandev@gmail.com</p>
    <p class="title">Donation</p>
    <p class="contact">
      Bank account number IBAN: PL68 1140 2004 0000 3302 7861 2383
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";

.title {
  font-size: 30px;
}
</style>
