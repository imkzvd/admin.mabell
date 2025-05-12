<template>
  <v-date-input
    :label="label"
    prepend-icon=""
    variant="solo-filled"
    density="comfortable"
    clearable
    autocomplete="off"
    :model-value="modelValue ? new Date(modelValue) : null"
    @update:model-value="onUpdateModelValue"
  />
</template>

<script setup lang="ts">
import type { UIDatePickerEmits, UIDatePickerProps } from './types';

defineProps<UIDatePickerProps>();
const emit = defineEmits<UIDatePickerEmits>();

function onUpdateModelValue(val: Date | null) {
  emit('update:modelValue', val ? val.toISOString() : null);
}
</script>

<style scoped lang="scss"></style>
