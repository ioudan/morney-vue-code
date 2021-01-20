<template>
<!--  <button class="button" @click="$emit('click', $event)">-->
  <button class="button" >
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
name: "Button"
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #FFFFFF;
  background: #767676;
  border-radius: 4px;
  border: none;
  padding: 9px 15px 9px 16px;

}
</style>