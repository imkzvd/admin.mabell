<template>
  <v-date-input
    ref="v-data-input"
    :label="label"
    prepend-icon=""
    variant="solo-filled"
    density="comfortable"
    clearable
    autocomplete="off"
    :hide-actions="false"
    v-model="model"
    @update:model-value="onModelValueUpdate"
    @cancel="onCancel"
  />
</template>

<script setup lang="ts">
import type { UIDatePickerEmits, UIDatePickerProps } from './types';
import type { VDateInput } from 'vuetify/labs/VDateInput';

const VDataInputInstance = useTemplateRef<InstanceType<typeof VDateInput>>('v-data-input');
defineProps<UIDatePickerProps>();
const emit = defineEmits<UIDatePickerEmits>();

const model = defineModel({
  set(value: Date | null) {
    const ISOString = value ? value.toISOString() : value;

    if (ISOString !== model.value) {
      emit('change', ISOString);
    }

    return ISOString;
  },

  get(value: UIDatePickerProps['modelValue']) {
    return value ? new Date(value) : null;
  },
});

function onModelValueUpdate() {
  VDataInputInstance.value?.blur();
}

function onCancel() {
  VDataInputInstance.value?.blur();
}
</script>

<style scoped lang="scss"></style>
