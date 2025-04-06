<script setup lang="ts">

import {inject} from "vue";
import {key1, key2, key3} from "@/keys/keys.ts";

const keyName = inject(key1)
const keyName2 = inject(key2)
const keyName3 = inject(key3)
</script>

<template>
   <div class="row">
      {{  keyName }} -- {{  keyName2 }} -- {{  keyName3 }}
   </div>
</template>

<style scoped lang="scss">

</style>