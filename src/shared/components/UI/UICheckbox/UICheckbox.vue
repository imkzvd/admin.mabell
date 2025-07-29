<template>
  <v-checkbox
    density="compact"
    class="ui-checkbox"
    :messages="notes"
    :ripple="false"
    :model-value="modelValue"
    :label="label"
    :disabled="isDisabled"
    @update:model-value="emit('update:modelValue', !!$event)"
  />
</template>

<script setup lang="ts">
import type { UICheckboxEmits, UICheckboxProps } from './types';

defineProps<UICheckboxProps>();
const emit = defineEmits<UICheckboxEmits>();
</script>

<style scoped lang="scss"></style>
