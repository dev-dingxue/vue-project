<script lang="ts" setup>

import {useRoute} from "vue-router";

const  router = useRoute()

console.log(router.query)
</script>

<template>
  <div class="row">
    我是路由3 query = {{ router.query.a }}
  </div>
</template>

<style lang="scss" scoped>

</style>