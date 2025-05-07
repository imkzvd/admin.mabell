<template>
  <v-autocomplete
    item-title="label"
    item-props
    :items="items"
    :model-value="modelValue"
    :label="label"
    :clearable="isClearable"
    :multiple="isMultiple"
    :return-object="false"
    :loading="isLoading"
    :error-messages="errorMessages"
    variant="solo-filled"
    density="comfortable"
    @update:search="emit('update:search', $event)"
    @update:model-value="emit('update:modelValue', $event || [])"
  />
</template>

<script setup lang="ts">
import type { UIAutocompleteEmits, UIAutocompleteProps } from './types';

defineProps<UIAutocompleteProps>();
const emit = defineEmits<UIAutocompleteEmits>();
</script>

<style scoped lang="scss"></style>
