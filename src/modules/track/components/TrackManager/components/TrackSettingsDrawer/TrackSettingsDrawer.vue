<template>
  <Teleport to="body">
    <UIDrawer
      :width="800"
      class="track-settings-drawer"
      :is-loading="loadingStates.isFetching"
      v-model="model"
      @opened="emit('opened')"
      @closed="emit('closed')"
    >
      <template #header>
        <UIText color="secondary" size="12px" class="mb-1">Track</UIText>
        <UIHeading level="2" leading-none>{{ track?.name || 'Track Settings' }}</UIHeading>
      </template>

      <template #default>
        <TrackSettings />
      </template>
    </UIDrawer>
  </Teleport>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/modules/track/stores/track.store.ts';
import type {
  TrackSettingsDrawerEmits,
  TrackSettingsDrawerProps,
} from '@/modules/track/components/TrackManager/components/TrackSettingsDrawer/types.ts';
import type { TrackRO } from '@/api/api.module.ts';

defineProps<TrackSettingsDrawerProps>();
const emit = defineEmits<TrackSettingsDrawerEmits>();

const model = defineModel();
const { track, loadingStates } = useTrackStore();

watch(track, (value: TrackRO | null, oldValue: TrackRO | null) => {
  if (value === null && oldValue !== null) {
    emit('update:modelValue', false);
    emit('closed');
  }
});
</script>

<style scoped lang="scss"></style>
