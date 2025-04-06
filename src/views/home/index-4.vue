<script lang="ts" setup>

import {computed, reactive, ref} from "vue";

const isActive = ref(true)
const hasError = ref(false)

const classObject = reactive({
  active: true,
  'text-danger': false
})

const error = ref(null)

const classcomputed = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value === 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')


</script>

<template>
  <div class="home">
    <h1>Class 与 Style 绑定</h1>

    <div :class="{active: isActive , 'text-danger': hasError}" class="static">
      是否包含 hasError, 但是包含 active
    </div>

    <!--    绑定对象-->
    <div :class="classObject" class="static"> 绑定对象</div>

    <div :class="classcomputed" class="static"> 绑定 computed</div>

    <div :class="[activeClass,errorClass]" class="static"> 绑定数组</div>


  </div>
</template>

<style lang="scss" scoped>

</style>