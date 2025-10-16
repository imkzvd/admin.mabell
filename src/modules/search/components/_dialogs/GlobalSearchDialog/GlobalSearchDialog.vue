<template>
  <Teleport to="body">
    <UIDialog max-width="800px" max-height="70vh" v-model="model">
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
} from '@/modules/search/components/_dialogs/GlobalSearchDialog/types.ts';

const props = defineProps<GlobalSearchDialogProps>();
const emit = defineEmits<GlobalSearchDialogEmits>();
const model = defineModel();

onBeforeRouteUpdate(() => {
  if (props.modelValue) {
    emit('update:modelValue', false);
  }
});
</script>

<style scoped lang="scss"></style>
