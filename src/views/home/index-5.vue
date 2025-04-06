<script lang="ts" setup>

import {ref} from "vue";

const awesome = ref(false)

const toggerShow = ref(false)


</script>

<template>
  <div class="home">
    <h1>条件渲染</h1>

    <div class="row">
      <button class="btn btn-danger" @click="awesome = !awesome">Toggle if</button>

      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

    <div class="row">
      <button class="btn btn-danger" @click="toggerShow = !toggerShow">Toggle show</button>
      <div v-show="toggerShow" class="active"> 切换显示我</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>