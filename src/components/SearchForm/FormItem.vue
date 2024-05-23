<script setup>
const props = defineProps(['item'])

</script>

<template>
  <a-form-item
    :label="props.item.label"
    :name="props.item.key"
  >
    <a-input
      clearable
      v-bind="$attrs"
      :placeholder="props.item.placeholder"
      v-if="props.item.type === 'input'"
    />
    <a-select
      clearable
      v-bind="$attrs"
      :placeholder="props.item.placeholder"
      v-if="props.item.type === 'select'"
      style="width: 180px;"
    >
      <a-select-option value="shanghai">Zone one</a-select-option>
      <a-select-option value="beijing">Zone two</a-select-option>
    </a-select>
  </a-form-item>
</template>

<style scoped>

</style>