<script lang="ts" setup>

import PartComponentSlot from "@/component/part-component-slot.vue";
import {ref} from "vue";

const dynamicSlotName = ref<string>("dynamicSlotName")

const dynamicSlot = ref<string>("dynamicSlot")

const dynamicSlotText = ref<{
  id: number;
  name: string;
}>({
  id: 0,
  name: "",
})


</script>

<template>

  <div class="home">
    <h1>插槽 Slots</h1>

    <part-component-slot>
      <template v-slot:default>
        我是默认的插槽内容
      </template>

      <!--         具名插槽-->
      <template v-slot:header>
        我是头部插槽内容
      </template>

      <template v-slot:footer>
        我是脚步插槽内容
      </template>

      <template #last>
        最后的插槽
      </template>

      <!--         动态 插槽 -->
      <template v-slot:[dynamicSlotName]>
        dynamicSlotName
      </template>

      <template #[dynamicSlot]>
        dynamicSlot
      </template>

      <!--  传值 未过关 -->

    </part-component-slot>

  </div>

</template>

<style lang="scss" scoped>

</style>