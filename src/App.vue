<script lang="ts" setup>
import {RouterView} from 'vue-router'
import {onMounted, ref} from "vue";

// 状态：是否为深色模式
const isDarkMode = ref<boolean>(false);

// 方法：切换主题
function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
  updateHtmlTheme();
}

// 方法：更新 <html> 元素的 data-bs-theme 属性
function updateHtmlTheme() {
  const htmlElement = document.documentElement; // 获取 <html> 元素
  if (isDarkMode.value) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-bs-theme', 'light');
  }
}

// 方法：检测系统主题偏好
function detectSystemTheme() {
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  updateHtmlTheme(); // 初始化时更新 <html> 的主题
}

// 在组件挂载时检测系统主题
onMounted(() => {
  detectSystemTheme();

  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    isDarkMode.value = e.matches;
    updateHtmlTheme();
  });
});

</script>

<template>
  <div class="container">
    <RouterView/>
  </div>
</template>

