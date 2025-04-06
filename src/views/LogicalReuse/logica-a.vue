<script lang="ts" setup>


import {useMouse} from "@/tools/mouse.ts";

const {x, y} = useMouse();


</script>

<template>

  <div class="home">
    <h1>逻辑复用</h1>

    <div class="row">
      x： {{ x }} --- y: {{ y }}
    </div>

  </div>


</template>

<style lang="scss" scoped>

</style>