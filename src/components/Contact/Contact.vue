<template>
  <div>
    <p class="title">Contact</p>
    <p class="contact">email: heksandev@gmail.com</p>
    <p class="contact">
      Bank account number IBAN: PL68 1140 2004 0000 3302 7861 2383
    </p>

    <form class="contact-form" method="post" @submit="sendForm">
      <label for="message"></label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        v-model="message"
      ></textarea>
      <button type="submit" value="submit">Wyślij</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  message = "";

  sendForm(e: any) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('key_user', 'WEB');
    formData.append("message", this.message);
    formData.append("ver", "WEB");

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0"
      },
      body: formData,
    };

    fetch("https://hexango.vxm.pl/SiteApi/AddLog.php", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/_functions";
@import "~bootstrap/scss/_variables";
@import "~bootstrap/scss/mixins/_breakpoints";

.title {
  font-size: 30px;
}

.contact-form {
  width: 50%;
  margin: 0 25%;
  display: flex;
  flex-direction: column;

  @include media-breakpoint-down(md) {
    width: 70%;
    margin: 0 15%;
  }

  @include media-breakpoint-down(sm) {
    width: 90%;
    margin: 0 5%;
  }
}
</style>
