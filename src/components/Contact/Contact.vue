<template>
  <div>
    <p class="contact">kontakt</p>
    <p class="contact">email: heksandev@gmail.com</p>

    <div class="contact-form">
      <form method="post" @submit="sendForm">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  message = "";

  sendForm(e: any) {
    e.preventDefault();

    let data = new FormData();
    data.append("key_user", "WEB");
    data.append("message", this.message);
    data.append("ver", "WEB");

    const requestOptions: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json", // sent request
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0"
      },
      body: data
    };

    fetch(
      "http://hexango.vxm.pl/WebService/AddLog.php",
      requestOptions
    )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
}
</script>

<style>
</style>
