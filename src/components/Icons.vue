<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: "Icons",
  props:["name"]
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>