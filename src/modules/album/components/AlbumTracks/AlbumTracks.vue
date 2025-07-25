<template>
  <div class="album-tracks">
    <div class="album-tracks__action-buttons px-4 py-4">
      <slot name="custom-action-buttons" />

      <UIButton size="x-small" color="white" class="ml-auto" @click="refreshTracks">
        Refresh
      </UIButton>
    </div>

    <UITable
      :columns="albumTracksTableColumns"
      :rows="tracks"
      hide-footer
      :is-loading="loadingStates.isFetching"
      height="600px"
      @click:row="onTableRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { useAlbumTracks } from '@/modules/album/composables/useAlbumTracks.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { albumTracksTableColumns } from '@/modules/album/components/AlbumTracks/constants/album-tracks-table-columns.ts';
import type { TrackRO } from '@/api/api.module.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type {
  AlbumTracksEmits,
  AlbumTracksProps,
} from '@/modules/album/components/AlbumTracks/types.ts';

const props = defineProps<AlbumTracksProps>();
const emit = defineEmits<AlbumTracksEmits>();

const { showErrorMessage } = useNotification();
const { tracks, fetchTracks, refreshTracks, loadingStates } = useAlbumTracks(props.albumId);

onMounted(async () => {
  try {
    await fetchTracks();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onTableRowClick(track: TrackRO, index: number) {
  emit('item-click', track, index);
}

defineExpose({
  refresh: refreshTracks,
});
</script>

<style scoped lang="scss">
.album-tracks {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
