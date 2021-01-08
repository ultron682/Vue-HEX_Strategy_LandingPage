<template>
  <div>
    <p class="title">Screenshots</p>
    <div class="screens-container">
      <div
        v-for="image in images"
        v-bind:key="image.id"
        class="image-container"
      >
        <img alt="Main Image" v-bind:src="image.src" />
      </div>

      <p class="title title-old">Old screenshots</p>

      <div
        v-for="image in oldImages"
        v-bind:key="image.id"
        class="image-container"
      >
        <img alt="Main Image" v-bind:src="image.src" />
      </div>
    </div>
  </div>
</template>>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Screens extends Vue {
  @Prop() private images!: Array<any>;
  @Prop() private oldImages!: Array<any>;
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
}

.screens-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .image-container {
    width: 600px;
    padding: 10px;

    img {
      width: 100%;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .title-old {
    width: 100%;
    text-align: center;
  }
}
</style>
