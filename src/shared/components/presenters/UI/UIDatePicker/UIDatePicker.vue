<template>
  <v-date-input
    ref="VDataInputInstance"
    :label="label"
    prepend-icon=""
    variant="solo-filled"
    density="comfortable"
    clearable
    autocomplete="off"
    :hide-actions="false"
    :model-value="modelValue ? new Date(modelValue) : null"
    @update:model-value="onUpdateModelValue"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import type { UIDatePickerEmits, UIDatePickerProps } from './types';
import type { VDateInput } from 'vuetify/labs/VDateInput';

const VDataInputInstance = ref<InstanceType<typeof VDateInput>>();
const props = defineProps<UIDatePickerProps>();
const emit = defineEmits<UIDatePickerEmits>();

function onUpdateModelValue(val: Date | null) {
  const ISOString = val ? val.toISOString() : val;
  emit('update:modelValue', ISOString);

  if (ISOString !== props.modelValue) {
    emit('change', ISOString);
  }

  VDataInputInstance.value?.blur();
}

function onCancel() {
  VDataInputInstance.value?.blur();
}
</script>

<style scoped lang="scss"></style>
