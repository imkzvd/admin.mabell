<template>
  <UIAutocomplete
    :items="artistSelectOptions"
    :label="label"
    is-clearable
    is-multiple
    placeholder="Select one or more artists"
    :is-loading="isArtistSearchFetching"
    :model-value="modelValue"
    :error-messages="errorMessages"
    class="artist-autocomplete-select"
    @update:model-value="emit('update:modelValue', $event)"
    @update:search="onUpdateSearch"
  />
</template>

<script setup lang="ts">
import { searchApiService } from '@/modules/search/services/search.api-service.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type {
  ArtistAutocompleteSelectEmits,
  ArtistAutocompleteSelectProps,
} from '@/modules/artist/components/ArtistAutocompleteSelect/types.ts';
import type { IndexedArtistRO } from '@/api/api.module.ts';
import type { UIAutocompleteItem } from '@/shared/components/UI/UIAutocomplete/types.ts';

const props = defineProps<ArtistAutocompleteSelectProps>();
const emit = defineEmits<ArtistAutocompleteSelectEmits>();

const { showErrorMessage } = useNotification();
const [isArtistSearchFetching, toggleArtistSearchFetching] = useToggle();
const debSearchByQuery = useDebounceFn(searchByQuery, 500);

const foundArtists = ref<IndexedArtistRO[]>([]);

const selectedArtistIds = computed<string[]>(
  () => props.selectedArtists?.map(({ id }) => id) || [],
);
const foundArtistsWithoutSelected = computed(() =>
  foundArtists.value.filter(({ id }) => !selectedArtistIds.value.includes(id)),
);
const foundArtistSelectOptions = computed(() =>
  foundArtistsWithoutSelected.value.map(({ id: value, name: label }) => ({ value, label })),
);
const selectedArtistSelectOptions = computed<UIAutocompleteItem[]>(
  () =>
    props.selectedArtists?.map(({ id: value, name: label }) => ({
      value,
      label,
    })) || [],
);
const artistSelectOptions = computed(() => {
  return [...selectedArtistSelectOptions.value, ...foundArtistSelectOptions.value];
});

async function searchByQuery(q: string) {
  try {
    foundArtists.value = await searchApiService.artistSearch(q);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onUpdateSearch(q: string | null) {
  if (!q) return;

  toggleArtistSearchFetching();
  await debSearchByQuery(q);
  toggleArtistSearchFetching();
}
</script>

<style scoped lang="scss"></style>
