<script lang="ts" setup>
type  props = {
  title: string,
  id: number,
  show: boolean,
  data: Array<any>
}
defineProps<props>()


</script>

<template>
  <h1> 我是组件实列 </h1>

  <div class="row">
     <span class="text-center">
        {{ title }} -- {{ id }} --- {{ show }}
     </span>
  </div>
</template>

<style lang="scss" scoped>

</style>