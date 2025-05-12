<template>
  <UIForm class="album-profile-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="formState.name"
      @blur="validator.name.$touch"
    />

    <UIRadioGroup
      :items="albumTypes"
      label="Type"
      class="album-profile-form__radio-group"
      v-model="formState.type"
    />

    <UIDatePicker
      label="Release date"
      :error-messages="validator.releaseAt.$errors.map((e) => e.$message as string)"
      v-model="formState.releaseAt"
      @blur="validator.releaseAt.$touch"
    />

    <UIAutocomplete
      :items="genres"
      is-multiple
      is-clearable
      label="Genres"
      v-model="formState.genres"
    />

    <UITextarea
      label="Description"
      type="textarea"
      :max-length="500"
      v-model="formState.description"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from './constants';
import type { AlbumProfileFormProps, AlbumProfileFormEmits, AlbumProfileFormState } from './types';

const props = defineProps<AlbumProfileFormProps>();
const emit = defineEmits<AlbumProfileFormEmits>();

const formState = reactive<AlbumProfileFormState>({
  name: props.album.name || '',
  type: props.album.type.value || '',
  genres: props.album.genres.map(({ value }) => value) || [],
  releaseAt: props.album.releaseAt || null,
  description: props.album.description || '',
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped>
.album-profile-form {
  &__radio-group {
    margin-inline: -16px;
  }
}
</style>
