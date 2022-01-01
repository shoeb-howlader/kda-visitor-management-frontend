<template>
  <div>
    <div class="fullscreen-wrapper">
      Content
      <h1>fhfhfhh gjgj</h1>
    </div>
    <button type="button" @click="toggle">Fullscreen</button>
  </div>
</template>
<script>
import { api as fullscreen } from "vue-fullscreen";
export default {
  methods: {
    async toggle() {
      await fullscreen.toggle(this.$el.querySelector(".fullscreen-wrapper"), {
        teleport: this.teleport,
        callback: (isFullscreen) => {
          this.fullscreen = isFullscreen;
        },
      });
      this.fullscreen = fullscreen.isFullscreen;
    },
  },
  data() {
    return {
      fullscreen: false,
      teleport: true,
    };
  },
};
</script>

<style lang="scss" >
.fullscreen-wrapper {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .button {
    margin-bottom: 20px;
  }
}
</style>