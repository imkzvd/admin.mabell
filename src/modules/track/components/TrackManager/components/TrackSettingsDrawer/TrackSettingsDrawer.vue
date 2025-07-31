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
        <div class="track-settings-drawer__details">
          <div class="track-settings-drawer__details-top-line mb-1">
            <UIText color="secondary" size="14px">Track</UIText>

            <UIIcon v-if="track?.isPublic" size="16px" icon="mdi-web" />
          </div>
        </div>

        <UIHeading leading-none>{{ track?.name || 'Track Settings' }}</UIHeading>
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

<style scoped lang="scss">
.track-settings-drawer {
  &__details-top-line {
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--secondary-color);
    line-height: 1;
  }
}
</style>
