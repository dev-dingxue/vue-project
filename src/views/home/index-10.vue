<script lang="ts" setup>

import {onMounted, ref, useTemplateRef} from "vue";

const list = ref<Array<{ title: string, description: string }>>([
  {title: "Home", description: "Home"}
]);
for (let i = 0; i < 10; i++) {
  list.value.push({
    title: i.toString(), description: "list-" + i.toString(),
  })
}

const itemRefs = useTemplateRef<HTMLLIElement[]>("items")

onMounted(() => {
  const items = itemRefs.value?.map((i) => JSON.parse(i.innerText).description)

  console.log(items)
})


</script>

<template>
  <div class="home">
    <h1>模板引用</h1>

    <div class="row">
      <ul>
        <li v-for="item in list" ref="items">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="row">

    </div>

    <div class="row">

    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>