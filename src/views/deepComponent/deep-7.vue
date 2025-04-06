<script lang="ts" setup>

import PartComponentProvide from "@/component/part-component-provide.vue";
import {provide} from "vue";
import {key1, key2, key3} from "@/keys/keys.ts";

provide(key1, "依赖注入1")
provide(key2, "依赖注入2")
provide(key3, "依赖注入3")

</script>

<template>

  <div class="home">
    <h1>依赖注入</h1>

    <div class="row">
      <part-component-provide></part-component-provide>
    </div>


  </div>
</template>

<style lang="scss" scoped>

</style>