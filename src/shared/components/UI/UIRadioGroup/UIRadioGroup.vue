<template>
  <v-radio-group
    density="comfortable"
    :label="label"
    :messages="notes"
    :model-value="modelValue"
    inline
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-radio v-for="item of items" :key="item.label" :label="item.label" :value="item.value" />
  </v-radio-group>
</template>

<script setup lang="ts">
import type { UIRadioGroupEmits, UIRadioGroupProps } from './types';

defineProps<UIRadioGroupProps>();
const emit = defineEmits<UIRadioGroupEmits>();
</script>

<style scoped></style>
