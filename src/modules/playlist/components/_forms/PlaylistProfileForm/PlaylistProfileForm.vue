<template>
  <UIForm :is-loading="isLoading" class="playlist-profile-form" @submit="onFormSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @blur="validator.name.$touch"
    />

    <UIAutocomplete
      label="Genres"
      is-clearable
      is-multiple
      :items="genres"
      v-model="state.genres"
    />

    <UITextarea label="Description" :max-length="500" v-model="state.description" />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/playlist/components/_forms/PlaylistProfileForm/constants.ts';
import type {
  PlaylistProfileFormEmits,
  PlaylistProfileFormProps,
} from '@/modules/playlist/components/_forms/PlaylistProfileForm/types.ts';
import type { UpdatePlaylistProfilePayload } from '@/modules/playlist/types.ts';

const props = defineProps<PlaylistProfileFormProps>();
const emit = defineEmits<PlaylistProfileFormEmits>();

const state: UpdatePlaylistProfilePayload = reactive({
  name: props.playlist.name || '',
  genres: props.playlist.genres.map(({ value }) => value) || [],
  description: props.playlist.description || '',
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
