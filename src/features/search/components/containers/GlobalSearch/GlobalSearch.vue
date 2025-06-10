<template>
  <div class="global-search">
    <UIInput
      name="search"
      size="large"
      placeholder="Enter the name of the artist, album, track, playlist or user's email."
      :is-loading="isSearchFetching"
      is-clearable
      is-autofocused
      v-model="modelValue"
      @update:model-value="onUpdateModelValue"
      @click:clear="onClickInputClearButton"
    />

    <SearchResult v-if="result" class="global-search__result">
      <ArtistSearchResultItem v-for="item of result.artists" :item="item" :key="item.id" />

      <AlbumSearchResultItem v-for="item of result.albums" :item="item" :key="item.id" />

      <TrackSearchResultItem v-for="item of result.tracks" :item="item" :key="item.id" />
    </SearchResult>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { searchService } from '@/features/search/services/search.service.ts';
import type { SearchResultRO } from '@/api/api.module.ts';

const { showErrorMessage } = useNotification();
const [isSearchFetching, toggleSearchFetching] = useToggle();
const debSearchByQuery = useDebounceFn(searchByQuery, 500);

const modelValue = ref<string>('');
const result = ref<SearchResultRO | null>(null);

async function onUpdateModelValue(q: string | null) {
  if (q === null) return;

  toggleSearchFetching();
  await debSearchByQuery(q);
  toggleSearchFetching();
}

async function searchByQuery(q: string) {
  try {
    result.value = await searchService.searchByQuery(q);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

function onClickInputClearButton() {
  result.value = null;
}
</script>

<style scoped lang="scss"></style>
