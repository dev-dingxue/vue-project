<script lang="ts" setup>


import {reactive, ref} from "vue";

const items = ref([{message: 'Foo'}, {message: 'Bar'}])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

</script>

<template>

  <div class="home">
    <h1>列表渲染</h1>

    <div class="row">
      <ul>
        <li v-for="item in items">
          {{ item.message.toString() }}
        </li>
      </ul>
    </div>

    <div class="row">
      <!--        解构-->
      <ul>
        <li v-for="({ message },index) in items" :key="index"> {{ message }} --- {{ index }}</li>
      </ul>
    </div>

    <!--    v-for 与对象-->

    <div class="row">
      <span v-for="(value ,key ,index) in  myObject ">
        {{ value }} -- {{ key }} -- {{ index }}
      </span>
    </div>

    <!--    在 v-for 里使用范围值 -->
    <div class="row">
      <div v-for="n in  10">{{ n }}</div>
    </div>


  </div>
</template>

<style lang="scss" scoped>

</style>