<script setup lang="ts">
  import {useAttrs} from "vue";

  // 是否禁止透传样式
  defineOptions({
     inheritAttrs: true,
  })

  const  attr = useAttrs()

  // 组件透传了哪些 样式名称
  console.log(attr)
</script>

<template>
    <div class="row" >
        name color
    </div>

</template>

<style scoped lang="scss">
.name{
  color: green;
}

.test{
  color: red;
}
</style>