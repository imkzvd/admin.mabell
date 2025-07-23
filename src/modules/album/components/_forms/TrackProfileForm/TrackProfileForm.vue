<template>
  <UIForm :is-loading="isLoading" class="album-track-profile-form" @submit="onSubmitForm">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="formState.name"
      @blur="validator.name.$touch"
    />

    <UISwitch
      label="Explicit"
      notes="The track will be marked with a special icon"
      class="mb-4"
      v-model="formState.isExplicit"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from './constants';
import type { TrackProfileFormProps, TrackProfileFormEmits, TrackProfileFormState } from './types';

const props = defineProps<TrackProfileFormProps>();
const emit = defineEmits<TrackProfileFormEmits>();

const formState = reactive<TrackProfileFormState>({
  name: props.track.name,
  isExplicit: props.track.isExplicit,
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
