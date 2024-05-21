<script setup>
import {ref} from "vue";
import {menus} from "@/router/menus.js";

const selectedKeys = ref(['home']);
</script>

<template>
  <div class="logo"/>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <router-link :to="menu.path" :key="menu.name" v-for="menu in menus" class="link">
      <a-menu-item :key="menu.name">
        <component :is="menu.meta.icon"/>
        <span>{{ menu.meta.title }}</span>
      </a-menu-item>
    </router-link>
  </a-menu>
</template>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.link {
  color: #ffffff;
}
</style>