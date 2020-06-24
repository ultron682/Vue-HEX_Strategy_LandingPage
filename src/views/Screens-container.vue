<template>
  <div>
    <Screens :images="images" :oldImages="oldImages" />
  </div>
</template>

<script>
// @ is an alias to /src
import Screens from "../components/Screens/Screens.vue";

export default {
  name: "screens-container",
  components: {
    Screens
  },
  data: function() {
    return {
      images: [
        {
          id: 1,
          src:
            "https://lh3.googleusercontent.com/r_ri6kiw7s6TZ46S56IIHSqNUQ274s58mBH9Epy6MlVH1LFcOqO7RGsOj8MLZcmFSQ=w876-h969-rw"
        },
        {
          id: 2,
          src:
            "https://lh3.googleusercontent.com/YdbO6FSODlz9hwWZqeLQrVkZMCzn3JQIkQ9RxzZV3I6JO76PyYZWgNmGHyeW1_I5zS8=w1752-h1938-rw"
        },
        {
          id: 3,
          src:
            "https://lh3.googleusercontent.com/oVSrC2tyDUFoAs1s5jceoG8Eg23zw2XejeJ9HZLkrQL2wtK8TkR7q6rRStt8-LgfFGM=w1752-h1938-rw"
        },
        {
          id: 4,
          src:
            "https://lh3.googleusercontent.com/Wxd7Wq6VwAwbXliUY1lQFDWKnTZ4nMJne7RBYGDCr-mJxYSGiwhKCGbuQJHIopunFVo=w1752-h1938-rw"
        }
      ],
      oldImages: [
        {
          id: 11,
          src: "/old-screens/1.gif"
        },
        {
          id: 12,
          src: "/old-screens/2.png"
        },
        {
          id: 13,
          src: "/old-screens/3.png"
        },
        {
          id: 14,
          src: "/old-screens/4.png"
        },
        {
          id: 15,
          src: "/old-screens/5.png"
        }
      ]
    };
  }
};
</script>
