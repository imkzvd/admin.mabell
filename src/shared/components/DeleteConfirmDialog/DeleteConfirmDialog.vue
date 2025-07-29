<template>
  <Teleport to="body">
    <UIDialog
      :heading="`Delete - &quot;${text}&quot;`"
      max-width="600px"
      v-model="model"
      class="delete-confirmation-dialog"
    >
      <UIInput
        name="name"
        :placeholder="`To confirm, type - &quot;${text}&quot;`"
        v-model="inputModel"
      />

      <DeleteButton
        :is-disabled="inputModel !== text"
        :is-loading="isLoading"
        @click="emit('confirm')"
      >
        Confirm
      </DeleteButton>
    </UIDialog>
  </Teleport>
</template>

<script setup lang="ts">
import type {
  DeleteConfirmDialogProps,
  DeleteConfirmDialogEmits,
} from '@/shared/components/DeleteConfirmDialog/types.ts';

defineProps<DeleteConfirmDialogProps>();
const emit = defineEmits<DeleteConfirmDialogEmits>();

const inputModel = ref<string>('');
const model = defineModel();
</script>

<style scoped lang="scss"></style>
