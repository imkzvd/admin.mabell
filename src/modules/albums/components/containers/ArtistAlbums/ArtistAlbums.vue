<template>
  <div class="artist-albums">
    <UISpinner v-if="!artistAlbumsStore.albums" />
    <UITable
      v-else
      :columns="artistAlbumsTableColumns"
      :rows="artistAlbumsStore.albums.items"
      :total="artistAlbumsStore.albums.total"
      :is-loading="artistAlbumsStore.isAlbumsFetching"
      height="600px"
      v-model:page="currentPage"
      v-model:page-size="currentPageSize"
      @click:row="onClickTableRow"
    />
  </div>
</template>

<script setup lang="ts">
import { useArtistAlbumsStore } from '@/features/albums/stores/artist-albums.store.ts';
import { artistAlbumsTableColumns } from './constants/artist-albums-table-columns.ts';
import { PAGINATION_PAGE_SIZE } from './constants/settings.ts';
import type { AlbumRO } from '@/api/api.module.ts';
import type {
  ArtistAlbumsEmits,
  ArtistAlbumsProps,
} from '@/features/albums/components/containers/ArtistAlbums/types.ts';

const props = defineProps<ArtistAlbumsProps>();
const emit = defineEmits<ArtistAlbumsEmits>();

const artistAlbumsStore = useArtistAlbumsStore();
const { currentPage, currentPageSize } = useOffsetPagination({
  page: 1,
  pageSize: PAGINATION_PAGE_SIZE,
  onPageChange: ({ currentPage, currentPageSize }) => {
    artistAlbumsStore.fetchAlbums(props.artistId, {
      limit: currentPageSize,
      page: currentPage,
    });
  },
  onPageSizeChange: ({ currentPage, currentPageSize }) => {
    artistAlbumsStore.fetchAlbums(props.artistId, {
      limit: currentPageSize,
      page: currentPage,
    });
  },
});

onMounted(() => artistAlbumsStore.fetchAlbums(props.artistId));
onUnmounted(() => artistAlbumsStore.$dispose());

async function onClickTableRow(item: AlbumRO, index: number) {
  emit('item-click', item, index);
}
</script>

<style scoped lang="scss"></style>
