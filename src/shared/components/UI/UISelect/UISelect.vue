<template>
  <v-select
    density="comfortable"
    item-title="label"
    variant="solo-filled"
    :clearable="isClearable"
    :items="items"
    :model-value="modelValue"
    :label="label"
    :multiple="isMultiple"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import type { UISelectEmits, UISelectProps } from './types';

defineProps<UISelectProps>();
const emit = defineEmits<UISelectEmits>();
</script>

<style scoped lang="scss"></style>
