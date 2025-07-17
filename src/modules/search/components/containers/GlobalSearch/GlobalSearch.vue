<template>
  <div class="global-search">
    <UIInput
      name="search"
      size="large"
      placeholder="Enter the name of the artist, album, track, playlist or user's email."
      :is-loading="isSearchFetching"
      is-clearable
      is-autofocused
      hide-message-space
      v-model="modelValue"
      class="global-search__input"
      @update:model-value="onUpdateModelValue"
      @click:clear="onClickInputClearButton"
    />

    <SearchResult v-if="searchResult" class="global-search__result">
      <UserSearchResultItem v-for="item of searchResult.users" :item="item" :key="item.id" />

      <ArtistSearchResultItem v-for="item of searchResult.artists" :item="item" :key="item.id" />

      <AlbumSearchResultItem v-for="item of searchResult.albums" :item="item" :key="item.id" />

      <TrackSearchResultItem v-for="item of searchResult.tracks" :item="item" :key="item.id" />
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
const searchResult = ref<SearchResultRO | null>(null);

async function onUpdateModelValue(q: string | null) {
  if (!q) return;

  toggleSearchFetching();
  await debSearchByQuery(q);
  toggleSearchFetching();
}

async function searchByQuery(q: string) {
  try {
    searchResult.value = await searchService.searchByQuery(q);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

function onClickInputClearButton() {
  searchResult.value = null;
}
</script>

<style scoped lang="scss">
.global-search {
  display: flex;
  flex-direction: column;

  &__result {
    overflow: auto;
  }

  &__input {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
