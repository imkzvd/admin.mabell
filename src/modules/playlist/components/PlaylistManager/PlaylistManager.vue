<template>
  <div class="playlist-manager">
    <div class="playlist-manager__action-buttons px-4 py-4">
      <UIButton
        size="x-small"
        color="white"
        :is-loading="loadingStates.isCreating"
        @click="onCreatePlaylistButtonClick"
      >
        Create
      </UIButton>

      <UIButton size="x-small" color="white">Activate</UIButton>

      <UIButton size="x-small" color="white">Publish</UIButton>

      <UIButton size="x-small" color="error">Delete</UIButton>

      <UIButton
        size="x-small"
        color="white"
        class="ml-auto"
        @click="onRefreshPlaylistListButtonClick"
      >
        Refresh
      </UIButton>
    </div>

    <UITable
      height="600px"
      :columns="playlistTableColumns"
      :rows="playlists"
      :total="total"
      :is-loading="loadingStates.isFetching"
      hide-footer
      @click:row="onTableRowClick"
    >
    </UITable>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { usePlaylists } from '@/modules/playlist/composables/usePlaylists.ts';
import { playlistTableColumns } from '@/modules/playlist/components/PlaylistManager/constants/playlist-table-columns.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';
import type { PlaylistRO } from '@/api/api.module.ts';
import type { PlaylistManagerProps } from '@/modules/playlist/components/PlaylistManager/types.ts';

const props = defineProps<PlaylistManagerProps>();

const router = useRouter();
const { showErrorMessage } = useNotification();
const { fetchPlaylists, createPlaylist, playlists, total, loadingStates } = usePlaylists(
  props.userId,
);

onMounted(async () => {
  try {
    await fetchPlaylists();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
});

async function onCreatePlaylistButtonClick() {
  try {
    await createPlaylist();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onRefreshPlaylistListButtonClick() {
  try {
    await fetchPlaylists();
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTableRowClick({ id }: PlaylistRO) {
  router.push({ name: 'playlist', params: { id } });
}
</script>

<style scoped lang="scss">
.playlist-manager {
  &__action-buttons {
    display: flex;
    column-gap: 8px;
  }
}
</style>
