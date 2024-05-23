<script setup>
import {ref} from "vue";
import SearchForm from "@/components/SearchForm/index.vue";

const formItemList = [
  {
    type: 'input',
    key: 'test1',
    label: '输入框',
    placeholder: '请输入',
  },
  {
    type: 'input',
    key: 'test2',
    label: '输入框',
    placeholder: '请输入',
  },
  {
    type: 'select',
    key: 'test3',
    label: '选择器',
    placeholder: '请选择',
  }
]

const formState = ref({});

const onSearch = () => {
  console.log(formState.value);
}
</script>

<template>
  <div>
    <search-form
      :formItemList="formItemList"
      v-model="formState"
      @onSearch="onSearch"
    />
    <div class="table-box">

    </div>
  </div>
</template>

<style scoped>
.table-box {
  background-color: #fff;
  min-height: 300px;
}
</style>