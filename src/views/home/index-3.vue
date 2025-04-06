<script lang="ts" setup>

import {computed, reactive, ref} from "vue";

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "yes" : "no";
})

function addBook() {
  author.books.push("Vue 3 - Basic books is successfully")
  author.books.push("Vue 3 - Basic books is successfully2")
}

function popbooks() {
  author.books.pop();
}

function publishedBooksMessageShow(show: string) {
  return show === "yes"
}


const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newVal) {
    [firstName.value, lastName.value] = newVal.split(' ').reverse()
  }
})

function replaceName(newName: string) {
  return fullName.value = newName;
}

</script>

<template>
  <div class="home">
    <h1>计算属性</h1>
    <p>Has published books: {{ publishedBooksMessage }} -- {{ author.books.length }}</p>
    <p>
      <button class="button" type="button" @click="addBook">add books</button>
    </p>
    <p>
      <button class="button" type="button" @click="popbooks"> popbooks</button>
    </p>
    <br>
    <div v-show="publishedBooksMessageShow(publishedBooksMessage)" class="published-books">
      我被显示了嘛
    </div>

    <br>
    <div> my name fullName : {{ fullName }}</div>
    <p>
      <button class="button" @click="replaceName('ding xue')">replace</button>
    </p>
  </div>
</template>

<style lang="scss" scoped>

</style>