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
      @update:model-value="onModelValueUpdate"
      @click:clear="onInputClearButtonClick"
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
import { searchApiService } from '@/modules/search/services/search.api-service.ts';
import type { SearchResultRO } from '@/api/api.module.ts';

const { showErrorMessage } = useNotification();
const [isSearchFetching, toggleSearchFetching] = useToggle();
const debounceSearch = useDebounceFn(search, 500);

const modelValue = ref<string>('');
const searchResult = ref<SearchResultRO | null>(null);

async function onModelValueUpdate(q: string | null) {
  if (!q) return;

  toggleSearchFetching();
  await debounceSearch(q);
  toggleSearchFetching();
}

async function search(q: string) {
  try {
    searchResult.value = await searchApiService.search(q);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

function onInputClearButtonClick() {
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
