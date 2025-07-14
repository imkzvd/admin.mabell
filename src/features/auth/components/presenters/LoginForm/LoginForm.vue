<template>
  <UIForm hide-submit-button :is-loading="isLoading" class="login-form" @submit="onSubmitForm">
    <UIInput
      name="username"
      placeholder="Username"
      :is-disabled="isLoading"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="formState.username"
      @change="validator.username.$touch"
    />

    <UIInput
      name="password"
      placeholder="Password"
      type="password"
      :is-disabled="isLoading"
      :error-messages="validator.password.$errors.map((e) => e.$message as string)"
      v-model="formState.password"
      @change="validator.password.$touch"
    />

    <UIButton
      type="submit"
      size="large"
      color="primary"
      is-block
      :is-loading="isLoading"
      class="hidden"
    >
      Sign In
    </UIButton>
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/features/auth/components/presenters/LoginForm/constants.ts';
import type {
  LoginFormEmits,
  LoginFormProps,
  LoginFormState,
} from '@/features/auth/components/presenters/LoginForm/types.ts';

defineProps<LoginFormProps>();
const emit = defineEmits<LoginFormEmits>();

const formState = reactive<LoginFormState>({
  username: '',
  password: '',
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>
