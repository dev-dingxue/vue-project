<script lang="ts" setup>

import {ref} from "vue";
import PartComponentProps from "@/component/part-component-props.vue";

const mytitle = ref<string>("我是父组件传递过来的")

const objTitle = ref({
  title: "ssss1",
  description: "ssss2",
  date: new Date()
})
</script>

<template>
  <div class="home">
    <h1>
      组件之间的值传递 （父子组件的传值）
    </h1>

    <div class="row">

      <!--   组合传值 ，可以单个数据 ，也可以是对象，或者 分开传值-->
      <part-component-props class="h3" disabled v-bind="objTitle"></part-component-props>

    </div>


  </div>
</template>

<style lang="scss" scoped>

</style>