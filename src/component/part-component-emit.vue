<script lang="ts" setup>


// 定义组件可以触发的事件
const emit = defineEmits<{
  sayHello: [msg: string],
  sendData: [payload: { id: number, name: string }]
}>()

function triggerHello() {
  // 触发 sayHello 事件
  emit('sayHello', 'Hello from child!')
}

function triggerData() {
  // 触发 sendData 事件并传递数据
  emit('sendData', {id: 1, name: 'Vue'})
}

function addConsole(name: string) {
  console.log(name)
}

defineExpose({
  addConsole
})
</script>

<template>
  <h1> 事件传递 </h1>

  <div class="row">
    <button class="btn btn-primary" @click="triggerHello">触发问候</button>

  </div>
  <button class="btn btn-primary" @click="triggerData">发送数据</button>

</template>

<style lang="scss" scoped>

</style>