<script setup lang="ts">

import {useRoute} from "vue-router";

const router  = useRoute()
</script>

<template>
   <div class="row">
     我是 4-1-1  {{ router.query.q }}
   </div>
  <div class="row">
    我是被 4-1 重定向到此的，并且我还携带了参数 q 的值
  </div>
  <div class="row">
    我还有一个新的名字叫做 link-4-2
  </div>
</template>

<style scoped lang="scss">

</style>