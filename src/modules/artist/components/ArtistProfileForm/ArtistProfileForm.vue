<template>
  <UIForm class="artist-profile-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="formState.name"
      @blur="validator.name.$touch"
    />

    <UIInput
      name="birthName"
      label="Birth Name"
      is-clearable
      :error-messages="validator.birthName.$errors.map((e) => e.$message as string)"
      v-model="formState.birthName"
      @blur="validator.birthName.$touch"
    />

    <UIDatePicker
      name="birthDate"
      label="Date of Birth"
      :error-messages="validator.birthDate.$errors.map((e) => e.$message as string)"
      v-model="formState.birthDate"
      @blur="validator.birthDate.$touch"
    />

    <UIAutocomplete
      label="Genres"
      :items="genres"
      is-clearable
      is-multiple
      v-model="formState.genres"
    />

    <UITextarea label="Biography" max-length="500" v-model="formState.biography" />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from './constants';
import type {
  ArtistProfileFormProps,
  ArtistProfileFormEmits,
  ArtistProfileFormState,
} from './types';

const props = defineProps<ArtistProfileFormProps>();
const emit = defineEmits<ArtistProfileFormEmits>();

const formState = reactive<ArtistProfileFormState>({
  name: props.artist.name || '',
  birthName: props.artist.birthName || null,
  birthDate: props.artist.birthDate || null,
  genres: props.artist.genres.map(({ value }) => value) || [],
  biography: props.artist.biography || '',
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
