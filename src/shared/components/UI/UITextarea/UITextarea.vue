<template>
  <v-textarea
    variant="solo-filled"
    density="comfortable"
    no-resize
    class="ui-textarea"
    clearable
    :loading="isLoading"
    :label="label"
    :counter="maxLength"
    v-model="model"
  />
</template>

<script setup lang="ts">
import type { UITextareaEmits, UITextareaProps } from '@/shared/components/UI/UITextarea/types.ts';

defineProps<UITextareaProps>();
defineEmits<UITextareaEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
