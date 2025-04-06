<script lang="ts" setup>

import {reactive, ref, watch, watchPostEffect} from "vue";

const oldquestion = ref<string>("0");

const question = ref<string>("");

watch(question, (newValue, oldValue) => {
  oldquestion.value = newValue;
})

const obj = reactive({
  count: 0,
})

const objobj = ref<string>("")

watch(() => obj.count, (newValue) => {
  objobj.value = newValue.toString()
})

const count = ref<string>("")

watchPostEffect(() => {
  console.log('DOM已更新，当前count:', count.value)
})

count.value = "我在更新了";

</script>

<template>
  <div class="home">
    <h1>侦听器</h1>

    <div class="row">
      <input v-model="question" class="form-control" type="text">
      <label> 原始值：{{ oldquestion }} --- 新的值：{{ question }}</label>
    </div>

    <div class="row">
      <label> 侦听响应式对象的属性值 </label>
      <input v-model="obj.count" class="form-control" type="text">
      属性值：{{ objobj }}
    </div>

    <div class="row">
      <label>访问更新后的元素</label>
      <span>{{ count }}</span>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>