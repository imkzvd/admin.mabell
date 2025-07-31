<template>
  <div class="track-manager">
    <div class="track-manager__action-buttons px-4 py-4">
      <UIButton
        size="x-small"
        color="white"
        :is-loading="loadingStates.isCreating"
        @click="onAddTrackButtonClick"
      >
        Add Track
      </UIButton>

      <UIButton size="x-small" color="white"> Activate</UIButton>

      <UIButton size="x-small" color="white"> Publish</UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton size="x-small" color="white" class="ml-auto" @click="fetchTracks">
        Refresh
      </UIButton>
    </div>

    <UITable
      :columns="trackTableColumns"
      :rows="tracks"
      :total="total"
      hide-footer
      :is-loading="loadingStates.isFetching"
      height="600px"
      class="track-manager__table"
      @click:row="onTableRowClick"
    >
      <template #name="{ item }">
        <div class="track-manager__table-name-cell">
          <UIText>{{ item.name }}</UIText>

          <UIIcon v-if="item?.isExplicit" icon="mdi-alpha-e-box" size="14px" />
        </div>
      </template>

      <template #featArtists="{ item }">
        <ArtistLinks :is-underlined="false" :list="item.featArtists" />
      </template>
    </UITable>

    <TrackSettingsDrawer
      v-model="isTrackSettingsDrawerVisible"
      @closed="onTrackSettingsDrawerClosed"
    />
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useTracks } from '@/modules/track/composables/useTracks.ts';
import { trackTableColumns } from '@/modules/track/components/TrackManager/constants/track-table-columns.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import { useTrackStore } from '@/modules/track/stores/track.store.ts';
import type { TrackManagerProps } from '@/modules/track/components/TrackManager/types.ts';

const props = defineProps<TrackManagerProps>();

const { showErrorMessage } = useNotification();
const { fetchTracks, createTrack, tracks, total, loadingStates } = useTracks(props.albumId);
const { fetchTrack } = useTrackStore();
const [isTrackSettingsDrawerVisible, toggleTrackSettingsDrawerVisible] = useToggle();

onMounted(async () => {
  try {
    await fetchTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onAddTrackButtonClick() {
  try {
    await createTrack();
    await fetchTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTableRowClick({ id }: TrackRO) {
  try {
    toggleTrackSettingsDrawerVisible();

    await fetchTrack(id);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTrackSettingsDrawerClosed() {
  try {
    await fetchTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss">
.track-manager {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }

  &__table-name-cell {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
}
</style>
