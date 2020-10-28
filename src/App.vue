<template title="index">
  <div id="app">
    <span>
            <svg-icon icon-class="password" />
    </span>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",

};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
