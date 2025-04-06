<script lang="ts" setup>

import {reactive, ref, watch} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";

const router = useRoute()

const params = ref(router.params.id);
const active = reactive<{
  oldVal: number,
  newVal: number,
}>({
  oldVal: 0,
  newVal: 0
})
watch(() => router.params.id, (newId, oldId) => {
  active.oldVal = Number(oldId);
  active.newVal = Number(newId);

  console.log('true')
})

onBeforeRouteUpdate(async (to, from) => {
  console.log(to.params.id);
  console.log(from.params.id);
})

</script>

<template>
  <div class="row">
    我是路由1 {{ params }}
  </div>
  <div class="row">
    old = {{ active.oldVal }} new = {{ active.newVal }}
  </div>
</template>

<style lang="scss" scoped>

</style>