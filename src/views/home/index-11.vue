<script lang="ts" setup>

import blogPost from "@/component/com-blog-post.vue"
import {ref} from "vue";

const posts = ref([
  {id: 1, title: 'My journey with Vue'},
  {id: 2, title: 'Blogging with Vue'},
  {id: 3, title: 'Why Vue is so fun'}
])

const postFontSize = ref<number>(1)

</script>

<template>
  <div class="home">
    <h1>组件基础</h1>

    <div :style="{fontSize: postFontSize+'px'}" class="row">
      <blog-post v-for="(item,index) in posts" :key="index" :title="item.title"></blog-post>
    </div>

    <div class="row">

    </div>
    <div class="row">

    </div>


  </div>
</template>

<style lang="scss" scoped>

</style>