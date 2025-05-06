<template>
  <div class="ui-color-picker">
    <UIText class="mb-2">{{ label }}</UIText>

    <v-color-picker
      border
      mode="hex"
      :width="width"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { UIColorPickerEmits, UIColorPickerProps } from './types';

defineProps<UIColorPickerProps>();
const emit = defineEmits<UIColorPickerEmits>();
</script>

<style scoped lang="scss"></style>
