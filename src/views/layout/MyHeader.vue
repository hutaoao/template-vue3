<script setup>
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import {useCommonStore} from '@/stores/common.js'

const common = useCommonStore()
</script>

<template>
  <menu-unfold-outlined
    v-if="common.collapsed"
    class="trigger"
    @click="() => common.toggle()"
  />
  <menu-fold-outlined v-else class="trigger" @click="() => common.toggle()"/>
</template>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>