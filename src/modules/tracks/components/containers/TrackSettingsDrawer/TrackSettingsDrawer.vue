<template>
  <Teleport to="body">
    <UIDrawer
      :width="1000"
      class="album-track-settings-drawer"
      :is-loading="!trackStore.track || trackStore.isTrackFetching"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      @opened="emit('opened')"
      @closed="emit('closed')"
    >
      <template v-if="trackStore.track" #header>
        <UIHeading level="2">{{ trackStore.track.name }}</UIHeading>
      </template>

      <template #default>
        <TrackSettings />
      </template>
    </UIDrawer>
  </Teleport>
</template>

<script setup lang="ts">
import { useTrackStore } from '@/features/tracks/stores/track.store.ts';
import type { TrackSettingsDrawerProps, TrackSettingsDrawerEmits } from './types.ts';

defineProps<TrackSettingsDrawerProps>();
const emit = defineEmits<TrackSettingsDrawerEmits>();

const trackStore = useTrackStore();
</script>

<style scoped lang="scss"></style>
