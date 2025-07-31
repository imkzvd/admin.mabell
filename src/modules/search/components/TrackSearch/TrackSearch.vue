<template>
  <div class="track-search">
    <UIInput
      name="search"
      size="large"
      placeholder="Enter the name of the track."
      is-clearable
      is-autofocused
      hide-message-space
      :is-loading="isSearchFetching"
      v-model="modelValue"
      class="track-search__input"
      @update:model-value="onModelValueUpdate"
      @click:clear="onInputClearButtonClick"
    />

    <SearchResult v-if="searchResult" class="track-search__result">
      <TrackSearchResultItem
        v-for="item of searchResult"
        :item="item"
        :key="item.id"
        :link-mode="linkMode"
        :show-type="showType"
        @click:item="emit('click:item', $event)"
      />
    </SearchResult>
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { searchApiService } from '@/modules/search/services/search.api-service.ts';
import type { IndexedTrackRO } from '@/api/api.module.ts';
import type {
  TrackSearchEmits,
  TrackSearchProps,
} from '@/modules/search/components/TrackSearch/types.ts';

defineProps<TrackSearchProps>();
const emit = defineEmits<TrackSearchEmits>();

const { showErrorMessage } = useNotification();
const [isSearchFetching, toggleSearchFetching] = useToggle();
const debounceSearch = useDebounceFn(search, 500);

const modelValue = ref<string>('');
const searchResult = ref<IndexedTrackRO[]>([]);

async function onModelValueUpdate(q: string | null) {
  if (!q) return;

  toggleSearchFetching();
  await debounceSearch(q);
  toggleSearchFetching();
}

async function search(q: string) {
  try {
    searchResult.value = await searchApiService.trackSearch(q);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

function onInputClearButtonClick() {
  searchResult.value = [];
}
</script>

<style scoped lang="scss">
.track-search {
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
