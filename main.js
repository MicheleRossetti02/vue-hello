

  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello",
        url: "./assets/starboy.jpeg"
      }
    }
  }).mount('#app')
