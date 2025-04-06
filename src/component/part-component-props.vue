<script lang="ts" setup>

const {title, description, date} = defineProps<{
  title: string,
  description: string,
  date?: Date,
  disabled: boolean
}>();

</script>

<template>
  <div class="row">
    {{ title }} -- {{ description }} -- {{ date }}
  </div>

  <div class="row">
    状态值： {{ disabled }}
  </div>
</template>

<style lang="scss" scoped>

</style>