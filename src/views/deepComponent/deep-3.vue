<script lang="ts" setup>

import PartComponentEmit from "@/component/part-component-emit.vue";
import {ref} from "vue"

const greeting1 = ref<string>()

const greeting2 = ref<{
  id: number,
  name: string
}>({
  id: 0,
  name: "Vue"
})

function handleHello(greeting: string) {

  greeting1.value = greeting;
  // console.log(greeting) // 输出: "Hello from child!"
}

function handleData(data: { id: number, name: string }) {
  console.log(data) // 输出: { id: 1, name: 'Vue' }

  greeting2.value.id = data.id;
  greeting2.value.name = data.name;
}

const childRef = ref();

function addConsoleFunction() {
  childRef.value.addConsole("new console");
}


</script>

<template>
  <div class="home">
    <h1> 组件之间事件传递</h1>
    <p>
      字符串：{{ greeting1 }} -- {{ greeting2.id }} -- {{ greeting2.name }}
    </p>
    <div class="row">
      <part-component-emit ref="childRef" @say-hello="handleHello" @send-data="handleData"></part-component-emit>
    </div>
    <button class="btn btn-primary" @click="addConsoleFunction">addConsole</button>
  </div>
</template>

<style lang="scss" scoped>

</style>