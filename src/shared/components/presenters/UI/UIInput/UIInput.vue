<template>
  <v-text-field
    density="comfortable"
    variant="solo-filled"
    autocomplete="off"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :label="label"
    :clearable="isClearable"
    :model-value="modelValue"
    :error-messages="errorMessages"
    :disabled="isDisabled"
    :max-width="maxWidth"
    :readonly="isReadonly"
    :autofocus="isAutofocused"
    :loading="isLoading"
    :messages="messages"
    :hide-details="hideMessageSpace"
    @update:model-value="emit('update:modelValue', $event)"
    @click:clear="emit('click:clear', null)"
  />
</template>

<script setup lang="ts">
import type { UIInputEmits, UIInputProps } from './types';

defineProps<UIInputProps>();
const emit = defineEmits<UIInputEmits>();
</script>

<style scoped lang="scss"></style>
