<script lang="ts" setup>
import {nextTick, reactive, ref} from "vue";

const count = ref<number>(0)

function addcount() {
  count.value++
}

const obj = ref({
  nested: {count: 0},
  arr: ['foo', 'bar']
})

async function mutateDeeply() {
  obj.value.nested.count++
  obj.value.arr.push(obj.value.nested.count.toString())
  await nextTick()

}

const state = reactive<{ title: string, count: number, desc: number }>({
  title: "hello words ", count: 0, desc: 0
})

function addstate() {
  state.title = "hello words is successfully"
  state.count++
  state.desc++
}

let unref = ref<number>(0); // 使用 ref 创建响应式数据

function getCount() {
  unref.value++; // 增加计数
}
</script>

<template>
  <div class="home">
    <h1>响应式基础</h1>

    <div @click="addcount">ref 的简单实用 count的值：{{ count }}</div>

    <div> 深层响应性</div>
    <div>原始兑现: {{ JSON.stringify(obj) }}</div>
    <button class="button" type="button" @click="mutateDeeply()"> submit</button>

    <div> --------------- reactive ----------------</div>
    <br>

    <div class="border">
      {{ state.title }} -- {{ state.count }} -- {{ state.desc }}
      <br>
      <button class="button" @click="addstate"> reactive</button>
    </div>
    <br>

    <div class="border">
      <button class="button" @click="getCount"> unref {{ unref }}</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>