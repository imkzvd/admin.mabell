<template>
  <UIButton
    color="error"
    :size="size"
    :is-disabled="isDisabled"
    :is-loading="isLoading"
    class="delete-button"
    @click="emit('click', $event)"
  >
    <UIIcon icon="ph:trash" class="mr-1 last:mr-0" />

    <span v-if="!withoutText">
      <slot name="default">Delete</slot>
    </span>
  </UIButton>
</template>

<script setup lang="ts">
import type { DeleteButtonEmits, DeleteButtonProps } from './types';

defineProps<DeleteButtonProps>();
const emit = defineEmits<DeleteButtonEmits>();
</script>

<style scoped lang="scss"></style>
