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
    v-model="model"
  />
</template>

<script setup lang="ts">
import type {
  UINumberInputEmits,
  UINumberInputProps,
} from '@/shared/components/UI/UINumberInput/types.ts';

defineProps<UINumberInputProps>();
defineEmits<UINumberInputEmits>();

const model = defineModel();
</script>

<style scoped></style>
