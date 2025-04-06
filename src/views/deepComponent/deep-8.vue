<script lang="ts" setup>

import {defineAsyncComponent, hydrateOnIdle} from "vue";
import PartComponentAsyncError from "@/component/part-component-async-error.vue";
import PartComponentAsyncLoader from "@/component/part-component-async-loader.vue";

const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import("@/component/part-component-async.vue"),

  // 加载异步组件时使用的组件
  loadingComponent: PartComponentAsyncLoader,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: PartComponentAsyncError,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000,
  hydrate: hydrateOnIdle(3000),
  onError: (e: Error) => {
    console.error(e);
  },
})
</script>

<template>
  <div class="home">
    <h1>
      异步组件
    </h1>

    <div class="row">
      <AsyncComp></AsyncComp>
      <!--      <part-component-async-error></part-component-async-error>-->
      <!--      <part-component-async-loader></part-component-async-loader>-->
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>