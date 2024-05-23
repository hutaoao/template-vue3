<script setup>
// import {reactive} from "vue";
import FormItem from './FormItem.vue';

// let formState = reactive({});
const model = defineModel(); // 使用 defineModel()宏 实现双向绑定
const props = defineProps(['formItemList'])
const emit = defineEmits(['input', 'onSearch'])

const onFinish = values => {
  console.log('Success:', values);
  // emit('onSearch', values); // 也可以通过事件带参数过去（参考已注释的代码）
  emit('onSearch');
};

const handleChange = (event, key) => {
  model.value[key] = event.target ? event.target.value : event; // input 和 其它有区别
  // formState[key] = event;
}
</script>

<template>
  <div class="search-box">
    <a-form
      :model="model"
      name="horizontal_login"
      layout="inline"
      autocomplete="off"
      @finish="onFinish"
    >
      <form-item
        v-for="(item) in props.formItemList"
        :item="item"
        :key="item.key"
        :value="model[item.key]"
        @change="handleChange($event, item.key)"
      />
      <a-form-item>
        <a-button type="primary" html-type="submit">查询</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped>
.search-box {
  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 20px;
}
</style>