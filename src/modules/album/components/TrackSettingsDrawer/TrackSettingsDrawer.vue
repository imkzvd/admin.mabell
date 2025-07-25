<template>
  <Teleport to="body">
    <UIDrawer
      :width="600"
      class="track-settings-drawer"
      :is-loading="loadingStates.isFetching"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      @opened="emit('opened')"
      @closed="emit('closed')"
    >
      <template #header>
        <UIHeading level="2">{{ track?.name || 'Track Settings' }}</UIHeading>
      </template>

      <template #default>
        <TrackSettings />
      </template>
    </UIDrawer>
  </Teleport>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/modules/album/stores/track.store.ts';
import type {
  TrackSettingsDrawerEmits,
  TrackSettingsDrawerProps,
} from '@/modules/album/components/TrackSettingsDrawer/types.ts';
import type { TrackRO } from '@/api/api.module.ts';

defineProps<TrackSettingsDrawerProps>();
const emit = defineEmits<TrackSettingsDrawerEmits>();

const { track, loadingStates } = useTrackStore();

watch(track, (value: TrackRO | null) => {
  if (value === null) {
    emit('update:modelValue', false);
  }
});
</script>

<style scoped lang="scss"></style>
