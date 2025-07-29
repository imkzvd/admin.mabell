<template>
  <v-textarea
    variant="solo-filled"
    density="comfortable"
    no-resize
    class="ui-textarea"
    clearable
    :loading="isLoading"
    :label="label"
    :model-value="modelValue"
    :counter="maxLength"
    @update:model-value="emit('update:modelValue', $event || '')"
  />
</template>

<script setup lang="ts">
import type { UITextareaEmits, UITextareaProps } from './types';

defineProps<UITextareaProps>();
const emit = defineEmits<UITextareaEmits>();
</script>

<style scoped lang="scss"></style>
