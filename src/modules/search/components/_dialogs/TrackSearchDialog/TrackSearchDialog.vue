<template>
  <Teleport to="body">
    <UIDialog max-width="800px" v-model="model">
      <template #header>Track Search</template>

      <template #default>
        <TrackSearch
          :show-type="showType"
          :link-mode="linkMode"
          @click:item="emit('click:item', $event)"
        />
      </template>
    </UIDialog>
  </Teleport>
</template>

<script setup lang="ts">
import type {
  TrackSearchDialogEmits,
  TrackSearchDialogProps,
} from '@/modules/search/components/_dialogs/TrackSearchDialog/types.ts';

defineProps<TrackSearchDialogProps>();
const emit = defineEmits<TrackSearchDialogEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
