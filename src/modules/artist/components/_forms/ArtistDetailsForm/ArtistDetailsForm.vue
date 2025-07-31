<template>
  <UIForm class="artist-details-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @blur="validator.name.$touch"
    />

    <UIInput
      name="birthName"
      label="Birth Name"
      is-clearable
      :error-messages="validator.birthName.$errors.map((e) => e.$message as string)"
      v-model="state.birthName"
      @blur="validator.birthName.$touch"
    />

    <UIDatePicker
      name="birthDate"
      label="Date of Birth"
      :error-messages="validator.birthDate.$errors.map((e) => e.$message as string)"
      v-model="state.birthDate"
      @blur="validator.birthDate.$touch"
    />

    <UIAutocomplete
      label="Genres"
      :items="genres"
      is-clearable
      is-multiple
      v-model="state.genres"
    />

    <UITextarea label="Biography" max-length="500" v-model="state.biography" />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/artist/components/_forms/ArtistDetailsForm/constants.ts';
import type { UpdateArtistDetailsPayload } from '@/modules/artist/types.ts';
import type {
  ArtistDetailsFormProps,
  ArtistDetailsFormEmits,
} from '@/modules/artist/components/_forms/ArtistDetailsForm/types.ts';

const props = defineProps<ArtistDetailsFormProps>();
const emit = defineEmits<ArtistDetailsFormEmits>();

const state: UpdateArtistDetailsPayload = reactive({
  name: props.artist.name || '',
  birthName: props.artist.birthName || null,
  birthDate: props.artist.birthDate || null,
  genres: props.artist.genres.map(({ value }) => value) || [],
  biography: props.artist.biography || '',
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
