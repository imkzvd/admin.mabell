<template>
  <UIForm class="album-profile-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @blur="validator.name.$touch"
    />

    <UIRadioGroup
      :items="albumTypes"
      label="Type"
      class="album-profile-form__radio-group"
      v-model="state.type"
    />

    <UIDatePicker
      label="Release date"
      :error-messages="validator.releaseAt.$errors.map((e) => e.$message as string)"
      v-model="state.releaseAt"
      @blur="validator.releaseAt.$touch"
    />

    <UIAutocomplete
      :items="genres"
      is-multiple
      is-clearable
      label="Genres"
      v-model="state.genres"
    />

    <UITextarea label="Description" type="textarea" :max-length="500" v-model="state.description" />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/album/components/AlbumProfileForm/constants.ts';
import type {
  AlbumProfileFormEmits,
  AlbumProfileFormProps,
} from '@/modules/album/components/AlbumProfileForm/types.ts';
import type { UpdateAlbumProfilePayload } from '@/modules/album/types.ts';

const props = defineProps<AlbumProfileFormProps>();
const emit = defineEmits<AlbumProfileFormEmits>();

const state: UpdateAlbumProfilePayload = reactive({
  name: props.album.name || '',
  type: props.album.type.value || '',
  genres: props.album.genres.map(({ value }) => value) || [],
  releaseAt: props.album.releaseAt || null,
  description: props.album.description || '',
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped>
.album-profile-form {
  &__radio-group {
    margin-inline: -16px;
  }
}
</style>
