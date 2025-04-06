<script lang="ts" setup>

import * as test from "node:test";

const model = defineModel()

const firstName = defineModel('firstName')

const lastName = defineModel('lastNameTwo')

function update() {
  model.value = "111111111111111111111";

  firstName.value = "test";

  lastName.value = "lastName";
}


</script>

<template>

  <div class="home">
    <div class="row">
      <button class="btn btn-primary" @click="update"> 触发绑定</button>
    </div>

    <div class="row">
      {{ model }} -- {{ firstName }} -- {{ lastName }}
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>