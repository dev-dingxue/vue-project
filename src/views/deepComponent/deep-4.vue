<script lang="ts" setup>

import {ref} from "vue";
import PartComponentModel from "@/component/part-component-model.vue";

const values = ref<string | any>()

const fistName = ref<string | any>()

const lasttwo = ref<string | any>()

function update() {
  values.value = "update a the ";

  fistName.value = "fistName  fistName  "

  lasttwo.value = "lasttwo.value"
}

</script>

<template>
  <div class="home">
    <h1>
      组件 v-model
    </h1>

    <div class="row">
      <part-component-model v-model="values" v-model:first-name="fistName"
                            v-model:last-name-two="lasttwo"></part-component-model>
    </div>

    <div class="row">
      <button class="btn btn-primary" @click="update"> update</button>
    </div>

    <div class="row">
      {{ values }} -- {{ fistName }} -- {{ lasttwo }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>