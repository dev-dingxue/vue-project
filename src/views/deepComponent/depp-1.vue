<script lang="ts" setup>
import PartComponentA from "@/component/part-component-a.vue";
</script>

<template>

  <div class="home">
    <h1> 深入组件信息 </h1>

    <!--    全局组件-->
    <global-component-a></global-component-a>

    <global-component-b></global-component-b>

    <!--    局部组件-->
    <part-component-a></part-component-a>

  </div>
</template>

<style lang="scss" scoped>

</style>