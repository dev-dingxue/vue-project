<script lang="ts" setup>


import {ref} from "vue";

const message = ref<string>("")

const multiline_message = ref<string>("")

const checked = ref<boolean>(false)

const checkedNames = ref<string[]>([])

const picked = ref<boolean>(false)

const selected = ref<string>("")


// 动态生成
const options = ref([
  {text: 'One', value: 'A'},
  {text: 'Two', value: 'B'},
  {text: 'Three', value: 'C'}
])

const selected_item = ref<string>("")
const selected_num = ref<number>(0)
const selected_trim = ref<string>("")


</script>

<template>
  <div class="home">
    <h1>表单输入绑定</h1>

    <div class="row">
      <p>Message is: {{ message }}</p>
      <input v-model="message" class="form-control" placeholder="edit me"/>
    </div>

    <div class="row">
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ multiline_message }}</p>
      <textarea v-model="multiline_message" class="form-control" placeholder="add multiple lines"></textarea>
    </div>


    <div class="row">
      <input id="checkbox" v-model="checked" type="checkbox"/>
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div class="row">
      <div>Checked names: {{ checkedNames }}</div>

      <input id="jack" v-model="checkedNames" type="checkbox" value="Jack"/>
      <label for="jack">Jack</label>

      <input id="john" v-model="checkedNames" type="checkbox" value="John"/>
      <label for="john">John</label>

      <input id="mike" v-model="checkedNames" type="checkbox" value="Mike"/>
      <label for="mike">Mike</label>
    </div>

    <div class="row">
      <div>Picked: {{ picked }}</div>

      <input id="one" v-model="picked" type="radio" value="One"/>
      <label for="one">One</label>

      <input id="two" v-model="picked" type="radio" value="Two"/>
      <label for="two">Two</label>
    </div>

    <div class="row">
      <div>Selected: {{ selected }}</div>

      <select v-model="selected" class="form-control">
        <option disabled value="">Please select one</option>
        <option value="A">A</option>
        <option class="B">B</option>
        <option class="C">C</option>
      </select>

    </div>

    <div class="row">
      <label>动态绑定 {{ selected_item }}</label>
      <select v-model="selected_item" class="form-control">
        <option v-for="(item,index) in options" :key="index" :value="item.value">{{ item.text }}</option>
      </select>
    </div>

    <div class="row">
      <label>修饰符</label>
      <br>

      <input v-model.number="selected_num" class="form-control" type="text"/> {{ selected_num }}

      <input v-model.trim="selected_trim" class="form-control" type="text"/> {{ selected_trim }}
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>