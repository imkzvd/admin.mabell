<template>
  <UIAutocomplete
    is-clearable
    is-multiple
    placeholder="Select one or more artists"
    class="artist-autocomplete-select"
    :items="artistAutocompleteItems"
    :label="label"
    :is-loading="isArtistSearchFetching"
    :error-messages="errorMessages"
    v-model="model"
    @update:search="onAutocompleteSearchUpdate"
  />
</template>

<script setup lang="ts">
import { searchApiService } from '@/modules/search/services/search.api-service.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  ArtistAutocompleteEmits,
  ArtistAutocompleteProps,
} from '@/modules/artist/components/ArtistAutocomplete/types.ts';
import type { IndexedArtistRO } from '@/api/api.module.ts';
import type { UIAutocompleteItem } from '@/shared/components/UI/UIAutocomplete/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const props = defineProps<ArtistAutocompleteProps>();
defineEmits<ArtistAutocompleteEmits>();
const model = defineModel();

const { showErrorMessage } = useNotification();
const [isArtistSearchFetching, toggleArtistSearchFetching] = useToggle();
const debounceSearch = useDebounceFn(search, 500);

const searchResult = ref<IndexedArtistRO[]>([]);

const selectedArtistIds = computed<string[]>(
  () => props.selectedArtists?.map(({ id }) => id) || [],
);
const unselectedFoundArtists = computed(() =>
  searchResult.value.filter(({ id }) => !selectedArtistIds.value.includes(id)),
);
const selectedArtistAutocompleteItems = computed<UIAutocompleteItem[]>(
  () => props.selectedArtists?.map(({ id: value, name: label }) => ({ value, label })) || [],
);
const unselectedArtistAutocompleteItems = computed<UIAutocompleteItem[]>(() =>
  unselectedFoundArtists.value.map(({ id: value, name: label }) => ({ value, label })),
);
const artistAutocompleteItems = computed(() => {
  return [...selectedArtistAutocompleteItems.value, ...unselectedArtistAutocompleteItems.value];
});

async function search(q: string) {
  try {
    searchResult.value = await searchApiService.artistSearch(q);
  } catch (e) {
    const { message } = e as ApiError | Error;

    showErrorMessage(message);
  }
}

async function onAutocompleteSearchUpdate(q: string | null) {
  if (!q) return;

  toggleArtistSearchFetching();
  await debounceSearch(q);
  toggleArtistSearchFetching();
}
</script>

<style scoped lang="scss"></style>
