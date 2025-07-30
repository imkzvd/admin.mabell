<template>
  <UIForm :is-loading="isLoading" class="user-profile-form" @submit="onSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @change="validator.name.$touch"
    />

    <UIDatePicker
      label="Date of Birth"
      :error-messages="validator.birthDate.$errors.map((e) => e.$message as string)"
      v-model="state.birthDate"
      @change="validator.birthDate.$touch"
    />

    <UISelect
      label="Favorite Genres"
      :items="genres"
      is-multiple
      :error-messages="validator.genres.$errors.map((e) => e.$message as string)"
      v-model="state.genres"
      @update:model-value="validator.genres.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/user/components/_forms/UserProfileForm/constants.ts';
import type {
  UserProfileFormEmits,
  UserProfileFormProps,
} from '@/modules/user/components/_forms/UserProfileForm/types.ts';
import type { UpdateUserProfilePayload } from '@/modules/user/types.ts';

const props = defineProps<UserProfileFormProps>();
const emit = defineEmits<UserProfileFormEmits>();

const state: UpdateUserProfilePayload = reactive({
  name: props.user.name,
  birthDate: props.user.birthDate,
  genres: props.user.genres.map(({ value }) => value),
});

const validator = useVuelidate(validRules, state);

async function onSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
