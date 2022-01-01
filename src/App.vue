<template>
  <!--div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </!--div-->
  <!--button type="button" @click="toggleApi">FullscreenApi</!--button>
  <fullscreen--
    v-if="fullscreen"
    v-model="fullscreen"
    teleport="true"
    :page-only="pageOnly"
  >
    <div class="fullscreen-wrapper">
      <Home />
    </div>
  </fullscreen-->
  <router-view />
</template>
<script>
import Home from "./views/Home.vue";
export default {
  data() {
    return {
      fullscreen: false,
    };
  },
  mounted() {},
  methods: {
    toggleApi() {
      this.$fullscreen.toggle();
      this.fullscreen = true;
    },
  },
  components: { Home },
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
