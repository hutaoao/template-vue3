<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const backHome = () => {
  router.push('/')
}
</script>

<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="backHome">Back Home</a-button>
    </template>
  </a-result>
</template>

<style scoped>

</style>