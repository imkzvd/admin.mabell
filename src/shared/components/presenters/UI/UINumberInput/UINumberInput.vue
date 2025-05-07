<template>
  <v-number-input
    inset
    variant="solo-filled"
    density="comfortable"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :readonly="isReadonly"
    :clearable="isClearable"
    :autofocus="isAutofocused"
    :loading="isLoading"
    :max-width="maxWidth"
    hide-details
    :min="min"
    :max="max"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event || 0)"
  />
</template>

<script setup lang="ts">
import type { UINumberInputEmits, UINumberInputProps } from './types.ts';

defineProps<UINumberInputProps>();
const emit = defineEmits<UINumberInputEmits>();
</script>

<style scoped></style>
