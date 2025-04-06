<script lang="ts" setup>

defineProps<{ title: string }>()
defineEmits<[key: string]>(["enlarge-text"])


</script>

<template>
  <div class="row">
    <h3> {{ title }} </h3>

    <button class="btn btn-primary">enlarge-text</button>
  </div>
</template>

<style lang="scss" scoped>

</style>