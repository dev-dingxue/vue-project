<script lang="ts" setup>
import {ref} from "vue";

const name = ref('Vue.js')

function greet(event: Event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert((event.target as HTMLButtonElement).value)
  }
}

function say(message: string) {
  alert(message)
}

function warn(message: string, event: Event) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}


function meta() {
  alert('meta is success')
}

</script>

<template>
  <!-- `greet` 是上面定义过的方法名 -->
  <div class="home">
    <div class="row">
      <button class="btn btn-primary" @click="greet">Greet</button>
    </div>

    <div class="row">
      <!--    在内联处理器中调用方法-->
      <button class="btn btn-primary" @click="say('hello')">Say hello</button>
      <br>
      <button class="btn btn-primary" @click="say('bye')">Say bye</button>
    </div>

    <!--  在内联事件处理器中访问事件参数-->
    <div class="row">
      <!-- 使用特殊的 $event 变量 -->
      <button class="btn btn-primary" @click="warn('Form cannot be submitted yet.', $event)">
        Submit1
      </button>
      <br>
      <!-- 使用内联箭头函数 -->
      <button class="btn btn-primary" @click="(event) => warn('Form cannot be submitted yet.', event)">
        Submit2
      </button>
    </div>

    <!--  <div class="row">-->

    <!--     <button class="btn-primary btn" @click.alt.exact="meta"> meta 键</button>-->
    <!--  </div>-->


  </div>

</template>


<style lang="scss" scoped>

</style>