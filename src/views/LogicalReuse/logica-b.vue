<script lang="ts" setup>

import {nextTick, ref} from "vue";

const isShow = ref<boolean>(false)

const updateState = async () => {
  isShow.value = !isShow.value;

  await nextTick(() => {
    console.info("我在更更新前的操作")
  });

  console.log('update after value', isShow.value)

}

</script>

<template>

  <div class="home">
    <h1>Transition</h1>
    <div class="row">
      <div class="col col-3">
        <button class="btn btn-primary" @click="updateState"> 动画1 -- Toggle</button>
      </div>

    </div>

    <div class="row">
      <Transition :appear="true" :css="true" :duration="1" type="animation">
        <div v-show="!isShow">
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  </div>

</template>

<style lang="scss" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>