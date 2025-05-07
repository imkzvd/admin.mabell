<template>
  <v-date-input
    :label="label"
    prepend-icon=""
    variant="solo-filled"
    density="comfortable"
    :model-value="new Date(modelValue)"
    @update:model-value="emit('update:modelValue', $event.toISOString())"
  />
</template>

<script setup lang="ts">
import type { UIDatePickerEmits, UIDatePickerProps } from './types';

defineProps<UIDatePickerProps>();
const emit = defineEmits<UIDatePickerEmits>();
</script>

<style scoped lang="scss"></style>
