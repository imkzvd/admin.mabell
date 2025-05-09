<template>
  <UIButton
    :is-loading="isLoading"
    :is-disabled="isDisabled"
    color="primary"
    icon="mdi-plus"
    :size="size"
    class="create-button"
    @click="emit('click', $event)"
  >
  </UIButton>
</template>

<script setup lang="ts">
import type { CreateButtonEmits, CreateButtonProps } from './types';

withDefaults(defineProps<CreateButtonProps>(), {
  size: 'x-small',
});
const emit = defineEmits<CreateButtonEmits>();
</script>

<style scoped lang="scss"></style>
