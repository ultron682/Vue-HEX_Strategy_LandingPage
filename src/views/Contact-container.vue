<template>
  <div>
    <Contact />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Contact from '../components/Contact/Contact.vue'

@Component({
  components: {
    Contact
  }
})
export default class ContactContainer extends Vue {

}
</script>
