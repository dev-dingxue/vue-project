<script setup lang="ts">

import {ref} from "vue";


</script>

<template>

  <div class="row text">
      <slot></slot>
  </div>

  <div class="row text">
    <slot name="header"></slot>
  </div>

  <div class="row text">
    <slot name="footer"></slot>
  </div>

  <div class="row text">
    <slot name="last"></slot>
  </div>

  <div class="row text">
    <slot name="dynamicSlotName"></slot>
  </div>

  <div class="row text">
    <slot name="dynamicSlot"></slot>
  </div>

</template>

<style scoped lang="scss">
  .text{
    color: red; font-size: 20px; font-weight: bold;
  }
</style>