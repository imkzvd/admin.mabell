<template>
  <div class="album-manager">
    <div class="album-manager__action-buttons px-4 py-4">
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

      <UIButton size="x-small" color="white" class="ml-auto" @click="onRefreshAlbumListButtonClick">
        Refresh
      </UIButton>
    </div>

    <UITable
      height="600px"
      :columns="albumTableColumns"
      :rows="albums"
      :total="total"
      :is-loading="loadingStates.isFetching"
      hide-footer
      @click:row="onTableRowClick"
    >
    </UITable>
  </div>
</template>

<script setup lang="ts">
import { albumTableColumns } from '@/modules/album/components/AlbumManager/constants/album-table-columns.ts';
import { useAlbums } from '@/modules/album/composables/useAlbums.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { AlbumManagerProps } from '@/modules/album/components/AlbumManager/types.ts';
import type { AlbumRO } from '@/api/api.module.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const props = defineProps<AlbumManagerProps>();

const router = useRouter();
const { showErrorMessage } = useNotification();
const { fetchAlbums, createAlbum, albums, total, loadingStates } = useAlbums(props.artistId);

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

async function onRefreshAlbumListButtonClick() {
  try {
    await fetchAlbums();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTableRowClick({ id }: AlbumRO) {
  router.push({ name: 'album', params: { id } });
}
</script>

<style scoped lang="scss">
.album-manager {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
