<template>
  <UIForm class="album-artists-form" :is-loading="isLoading" @submit="onSubmitForm">
    <ArtistAutocompleteSelect
      :selected-artists="album.artists"
      :error-messages="validator.artists.$errors.map((e) => e.$message as string)"
      v-model="formState.artists"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/album/components/presenters/AlbumArtistsForm/constants.ts';
import type {
  AlbumArtistsFormEmits,
  AlbumArtistsFormProps,
  AlbumArtistsFormState,
} from '@/modules/album/components/presenters/AlbumArtistsForm/types.ts';

const props = defineProps<AlbumArtistsFormProps>();
const emit = defineEmits<AlbumArtistsFormEmits>();

const formState = reactive<AlbumArtistsFormState>({
  artists: props.album.artistIds,
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
