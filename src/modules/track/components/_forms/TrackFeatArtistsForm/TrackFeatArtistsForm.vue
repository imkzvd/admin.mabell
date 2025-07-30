<template>
  <UIForm :is-loading="isLoading" class="track-feat-artists-form" @submit="onFormSubmit">
    <ArtistAutocompleteSelect :selected-artists="track.featArtists" v-model="state.artists" />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  TrackFeatArtistsFormEmits,
  TrackFeatArtistsFormProps,
} from '@/modules/track/components/_forms/TrackFeatArtistsForm/types.ts';
import type { UpdateTrackFeatArtistsPayload } from '@/modules/track/types.ts';

const props = defineProps<TrackFeatArtistsFormProps>();
const emit = defineEmits<TrackFeatArtistsFormEmits>();

const state: UpdateTrackFeatArtistsPayload = reactive({
  artists: props.track.featArtistIds,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
