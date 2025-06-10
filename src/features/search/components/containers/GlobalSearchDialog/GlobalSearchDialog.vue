<template>
  <Teleport to="body">
    <UIDialog
      max-width="800px"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <template #header>Search</template>

      <template #default>
        <GlobalSearch />
      </template>
    </UIDialog>
  </Teleport>
</template>

<script setup lang="ts">
import type {
  GlobalSearchDialogEmits,
  GlobalSearchDialogProps,
} from '@/features/search/components/containers/GlobalSearchDialog/types.ts';

const props = defineProps<GlobalSearchDialogProps>();
const emit = defineEmits<GlobalSearchDialogEmits>();

onBeforeRouteUpdate(() => {
  if (props.modelValue) {
    emit('update:modelValue', false);
  }
});
</script>

<style scoped lang="scss"></style>
