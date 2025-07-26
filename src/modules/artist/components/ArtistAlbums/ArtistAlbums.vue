<template>
  <div class="artist-albums">
    <div class="artist-albums__action-buttons px-4 py-4">
      <UIButton
        size="x-small"
        color="white"
        :is-loading="loadingStates.isCreating"
        @click="onCreateAlbumButtonClick"
      >
        Create
      </UIButton>

      <UIButton size="x-small" color="white">Activate</UIButton>

      <UIButton size="x-small" color="white">Publish</UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton size="x-small" color="white" class="ml-auto" @click="onRefreshAlbumsButtonClick">
        Refresh
      </UIButton>
    </div>

    <UITable
      height="600px"
      :columns="artistAlbumsTableColumns"
      :rows="albums"
      :is-loading="loadingStates.isFetching"
      hide-footer
      @click:row="onTableRowClick"
    >
    </UITable>
  </div>
</template>

<script setup lang="ts">
import { artistAlbumsTableColumns } from '@/modules/artist/components/ArtistAlbums/constants/artist-albums-table-columns.ts';
import { useArtistAlbums } from '@/modules/artist/composables/useArtistAlbums.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  ArtistAlbumsEmits,
  ArtistAlbumsProps,
} from '@/modules/artist/components/ArtistAlbums/types.ts';
import type { AlbumRO } from '@/api/api.module.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const props = defineProps<ArtistAlbumsProps>();
const emit = defineEmits<ArtistAlbumsEmits>();

const { showErrorMessage } = useNotification();
const { albums, fetchAlbums, createAlbum, loadingStates } = useArtistAlbums(props.artistId);

onMounted(async () => {
  try {
    await fetchAlbums();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onCreateAlbumButtonClick() {
  try {
    await createAlbum();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onRefreshAlbumsButtonClick() {
  try {
    await fetchAlbums();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTableRowClick(item: AlbumRO, index: number) {
  emit('item-click', item, index);
}
</script>

<style scoped lang="scss">
.artist-albums {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
