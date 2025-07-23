<template>
  <UIForm :is-loading="isLoading" class="track-feat-artists-form" @submit="onSubmitForm">
    <ArtistAutocompleteSelect :selected-artists="track.featArtists" v-model="formState.artists" />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  TrackFeatArtistsFormState,
  TrackFeatArtistsFormProps,
  TrackFeatArtistsFormEmits,
} from './types';

const props = defineProps<TrackFeatArtistsFormProps>();
const emit = defineEmits<TrackFeatArtistsFormEmits>();

const formState = reactive<TrackFeatArtistsFormState>({
  artists: props.track.featArtistIds,
});

async function onSubmitForm() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
