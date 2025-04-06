<script lang="ts" setup>
import {ref} from "vue";

const title = ref<string>("我是测试信息")

const html_demo = ref<string>(`<span style="color: red">This should be red.</span>`)

const attrs = ref<string>("attrs")

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}
const okay = ref<boolean>(true)

const message = ref<string>(" hello world ")

const attributeName = ref<string>("attributeName")
const urls = ref<string>("https://www.baidu.com")

const eventname = ref<string>("click")

function doSomething() {
  alert(" this is something  ")
}
</script>

<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <br>
    <div v-bind:id="attrs" v-html="html_demo"></div>
    <br>
    <div v-bind="objectOfAttrs"> 我是测试测</div>
    <br>
    <div> {{ !!okay }} ---- {{ message }} -- {{ message.toLocaleUpperCase() }}</div>
    <br>
    <div v-bind:[attributeName]="urls" @[eventname]="doSomething">我是属性绑定值类型</div>


  </div>
</template>

<style lang="scss" scoped>
.home {
  #attrs {
    font-size: 18px;
    font-style: italic;
  }
}
</style>