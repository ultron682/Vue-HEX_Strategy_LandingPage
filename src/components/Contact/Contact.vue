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
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
   message = ''

   sendForm (e: any): any {
     e.preventDefault()

     //  let data = new FormData()
     //  data.append('key_user', 'WEB')
     //  data.append('message', this.message)
     //  data.append('ver', 'WEB')

     //   fetch
     //     .post("http://hexango.vxm.pl/WebService/AddLog.php", data, {
     //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
     //       responseType: "blob"
     //     })
     //     .then(response => {
     //       console.log(response);
     //       console.log(response.data);
     //     });
   }
}
</script>

<style>
</style>
