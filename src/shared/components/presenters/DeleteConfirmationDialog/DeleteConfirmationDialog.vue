<template>
  <Teleport to="body">
    <UIDialog
      :heading="`Delete - &quot;${text}&quot;`"
      max-width="600px"
      :model-value="modelValue"
      class="delete-confirmation-dialog"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #default>
        <DeleteConfirmation :text="text" :is-loading="isLoading" @confirm="emit('confirm')" />
      </template>
    </UIDialog>
  </Teleport>
</template>

<script setup lang="ts">
import type { DeleteConfirmationDialogEmits, DeleteConfirmationDialogProps } from './types.ts';

defineProps<DeleteConfirmationDialogProps>();
const emit = defineEmits<DeleteConfirmationDialogEmits>();
</script>

<style scoped lang="scss"></style>
