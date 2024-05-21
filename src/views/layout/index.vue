<script setup>
import MyHeader from "./MyHeader.vue";
import MySider from "./MySider.vue";
import MyContent from "./MyContent.vue";
import {useCommonStore} from '@/stores/common.js'

const common = useCommonStore()
</script>

<template>
  <a-layout class="app-box">
    <a-layout-sider
      v-model:collapsed="common.collapsed"
      :trigger="null"
      collapsible
      breakpoint="lg"
      collapsed-width="0"
    >
      <MySider/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <MyHeader/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <MyContent/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.app-box {
  height: 100vh;
}
</style>