<template>
  <UIForm :is-loading="isLoading" class="user-username-form" @submit="onSubmitForm">
    <UIInput
      name="username"
      label="Username"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="formState.username"
      @change="validator.username.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/user/components/presenters/UserUsernameForm/constants.ts';
import type {
  UserUsernameFormEmits,
  UserUsernameFormProps,
  UserUsernameFormState,
} from '@/modules/user/components/presenters/UserUsernameForm/types.ts';

const props = defineProps<UserUsernameFormProps>();
const emit = defineEmits<UserUsernameFormEmits>();

const formState = reactive<UserUsernameFormState>({
  username: props.user.username || '',
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
