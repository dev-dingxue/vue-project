<script lang="ts" setup>

defineProps<{
  q:string,
  s:string,
}>()

</script>

<template>
  <div class="row">
    我是路由2
  </div>
  <div class="row">
     {{ q }} -- {{ s }}
  </div>
</template>

<style lang="scss" scoped>

</style>