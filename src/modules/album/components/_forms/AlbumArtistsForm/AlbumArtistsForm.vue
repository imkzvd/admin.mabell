<template>
  <UIForm class="album-artists-form" :is-loading="isLoading" @submit="onFormSubmit">
    <ArtistAutocompleteSelect
      :selected-artists="album.artists"
      :error-messages="validator.artists.$errors.map((e) => e.$message as string)"
      @blur="validator.artists.$touch"
      v-model="state.artists"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/album/components/_forms/AlbumArtistsForm/constants.ts';
import type {
  AlbumArtistsFormEmits,
  AlbumArtistsFormProps,
} from '@/modules/album/components/_forms/AlbumArtistsForm/types.ts';
import type { UpdateAlbumArtistsPayload } from '@/modules/album/types.ts';

const props = defineProps<AlbumArtistsFormProps>();
const emit = defineEmits<AlbumArtistsFormEmits>();

const state: UpdateAlbumArtistsPayload = reactive({
  artists: props.album.artistIds,
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
