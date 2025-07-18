<template>
  <div class="delete-confirmation">
    <UIInput
      name="name"
      :placeholder="`To confirm, type &quot;${text}&quot;`"
      v-model="inputModel"
    />

    <DeleteButton
      :is-disabled="inputModel !== text"
      :is-loading="isLoading"
      @click="emit('confirm')"
    >
      Confirm
    </DeleteButton>
  </div>
</template>

<script setup lang="ts">
import type { DeleteConfirmationEmits, DeleteConfirmationProps } from './types';

defineProps<DeleteConfirmationProps>();
const emit = defineEmits<DeleteConfirmationEmits>();

const inputModel = ref<string>('');
</script>

<style scoped lang="scss"></style>
