<template>
  <UIForm hide-submit-button :is-loading="isLoading" class="login-form" @submit="onFormSubmit">
    <UIInput
      name="username"
      placeholder="Username"
      :is-disabled="isLoading"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="state.username"
      @change="validator.username.$touch"
    />

    <UIInput
      name="password"
      placeholder="Password"
      type="password"
      :is-disabled="isLoading"
      :error-messages="validator.password.$errors.map((e) => e.$message as string)"
      v-model="state.password"
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
import { validRules } from '@/modules/auth/components/LoginForm/constants.ts';
import type { LoginFormEmits, LoginFormProps } from '@/modules/auth/components/LoginForm/types.ts';
import type { LoginAdminPayload } from '@/modules/auth/types.ts';

defineProps<LoginFormProps>();
const emit = defineEmits<LoginFormEmits>();

const state: LoginAdminPayload = reactive({
  username: '',
  password: '',
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>
