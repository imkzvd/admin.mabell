<template>
  <v-autocomplete
    item-title="label"
    item-props
    :items="items"
    :label="label"
    :clearable="isClearable"
    :multiple="isMultiple"
    :return-object="false"
    :loading="isLoading"
    :error-messages="errorMessages"
    variant="solo-filled"
    density="comfortable"
    autocomplete="off"
    clear-on-select
    v-model="model"
    @update:search="emit('update:search', $event)"
  />
</template>

<script setup lang="ts">
import type {
  UIAutocompleteEmits,
  UIAutocompleteProps,
} from '@/shared/components/UI/UIAutocomplete/types.ts';

defineProps<UIAutocompleteProps>();
const emit = defineEmits<UIAutocompleteEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
