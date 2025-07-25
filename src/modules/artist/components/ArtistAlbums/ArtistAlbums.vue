<template>
  <div class="artist-albums">
    <UITable
      height="600px"
      :columns="artistAlbumsTableColumns"
      :rows="albums"
      :total="total"
      :is-loading="loadingStates.isFetching"
      v-model:page="currentPage"
      v-model:page-size="currentPageSize"
      @update:page="fetchAlbumsWithPayload"
      @update:page-size="fetchAlbumsWithPayload"
      @click:row="onTableRowClick"
    >
      <template #footer>
        <UIButton :is-loading="loadingStates.isCreating" @click="onCreateButtonClick">
          Create
        </UIButton>
      </template>
    </UITable>
  </div>
</template>

<script setup lang="ts">
import { artistAlbumsTableColumns } from '@/modules/artist/components/ArtistAlbums/constants/artist-albums-table-columns.ts';
import { useArtistAlbums } from '@/modules/artist/composables/useArtistAlbums.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { PAGINATION_PAGE_SIZE } from '@/modules/artist/components/ArtistAlbums/constants/settings.ts';
import type {
  ArtistAlbumsEmits,
  ArtistAlbumsProps,
} from '@/modules/artist/components/ArtistAlbums/types.ts';
import type { AlbumRO } from '@/api/api.module.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const props = defineProps<ArtistAlbumsProps>();
const emit = defineEmits<ArtistAlbumsEmits>();

const { showSuccessMessage, showErrorMessage } = useNotification();
const { albums, total, fetchAlbums, createAlbum, loadingStates } = useArtistAlbums(props.artistId, {
  limit: PAGINATION_PAGE_SIZE,
});
const currentPage = ref<number>(1);
const currentPageSize = ref<number>(PAGINATION_PAGE_SIZE);

async function fetchAlbumsWithPayload() {
  try {
    await fetchAlbums({
      limit: currentPageSize.value,
      page: currentPage.value,
    });
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

onMounted(fetchAlbumsWithPayload);

async function onCreateButtonClick() {
  try {
    await createAlbum();
    //
    currentPage.value = 1;
    await fetchAlbumsWithPayload(); // TODO: fix! not fetch album on update current page
    //
    showSuccessMessage('The album has been created!');
  } catch (error) {
    const { message } = error as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onTableRowClick(item: AlbumRO, index: number) {
  emit('item-click', item, index);
}
</script>

<style scoped lang="scss"></style>
