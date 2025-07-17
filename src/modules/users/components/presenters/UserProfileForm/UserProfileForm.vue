<template>
  <UIForm :is-loading="isLoading" class="user-profile-form" @submit="onSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="formState.name"
      @change="validator.name.$touch"
    />

    <UIDatePicker
      label="Date of Birth"
      :error-messages="validator.birthDate.$errors.map((e) => e.$message as string)"
      v-model="formState.birthDate"
      @change="validator.birthDate.$touch"
    />

    <UISelect
      label="Favorite Genres"
      :items="genres"
      is-multiple
      :error-messages="validator.genres.$errors.map((e) => e.$message as string)"
      v-model="formState.genres"
      @update:model-value="validator.genres.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/features/users/components/presenters/UserProfileForm/constants.ts';
import type {
  UserProfileFormEmits,
  UserProfileFormProps,
  UserProfileFormState,
} from '@/features/users/components/presenters/UserProfileForm/types.ts';

const props = defineProps<UserProfileFormProps>();
const emit = defineEmits<UserProfileFormEmits>();

const formState = reactive<UserProfileFormState>({
  name: props.user.name || '',
  birthDate: props.user.birthDate || null,
  genres: props.user.genres.map(({ value }) => value) || [],
});

const validator = useVuelidate(validRules, formState);

async function onSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
