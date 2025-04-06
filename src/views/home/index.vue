<script lang="ts" setup>
import home from '@/router/home.ts'
import deepComponent from "@/router/deepComponent.ts";
import logical from "@/router/Logical.ts";
import link from "@/router/link.ts";

const links = link.map(ele => {
  return ` <a class="urls" href="${ele.path}">${ele.meta.title}</a>`
}).join("")

const logicalHtml = logical.map(ele => {
  return ` <a class="urls" href="${ele.path}">${ele.meta.title}</a>`
}).join("")

const deepComponentHtml = deepComponent.map(ele => ` <a class="urls" href="${ele.path}">${ele.meta.title}</a>`).join("")

const homeHtml = home.map(ele => ` <a class="urls" href="${ele.path}">${ele.meta.title}</a>`).join("")

</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="">我是主页</h1>
    </div>
    <div class="row">
      <div class="bar text-left" v-html="homeHtml"></div>
    </div>

    <div class="row">
      <div class="bar text-left" v-html="deepComponentHtml"></div>
    </div>

    <div class="row">
      <div class="bar text-left" v-html="logicalHtml"></div>
    </div>

    <div class="row">
      <div class="bar text-left" v-html="links"></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.bar {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  :deep(.urls) {
    display: inline-block;
    padding: 10px;
    background-color: #3296fa;
    color: white;
    margin: 5px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
      font-weight: bold;
      font-size: 18px;
    }
  }
}

</style>