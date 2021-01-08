<template>
  <div>
    <Screens :images="images" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Screens from '@/components/Screens/Screens.vue'
import Component from 'vue-class-component'

@Component({
  name: 'screens-container',
  components: {
    Screens
  }
})
export default class ScreensContainer extends Vue {
      images: Array<any> = [
        {
          id: 1,
          src:
            'https://play-lh.googleusercontent.com/oYvjyzM8VxAJP8mFqdZv3qcKXnQdj_JItYNx_tC2w-erqiWRbY3dg337AfB4cl_XjD0=w720-h310-rw'
        },
        {
          id: 2,
          src:
            'https://play-lh.googleusercontent.com/u-MdXc218Gdn7vzvmTmYt0Q9eOgEtaHZoExh7ukXWsrWiki4IH82Igc2ybvyQMNEmg=w1440-h789-rw'
        },
        {
          id: 3,
          src:
            'https://play-lh.googleusercontent.com/npcTmyyP2ThowpQsOEMdYHhVN2ujSShOJ3Eqy-sh2yDTOc4ej8TigaGmCOvK2-P4xA=w1440-h789-rw'
        },
        {
          id: 4,
          src:
            'https://play-lh.googleusercontent.com/gz3Ms2blezjLjd84iTAqcQm04IXnemylZSPNuUa_v4JGCzJC_9Aj4bq4WF-mU0vHYg=w1440-h789-rw'
        }
      ];
}
</script>
