<template>
  <UIForm class="admin-username-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UIInput
      name="username"
      label="Username"
      placeholder="Enter the username"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="formState.username"
      @blur="validator.username.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from './constants';
import type { UpdateAdminUsernameDTO } from '@/api/api.module';
import type { AdminUsernameFormProps, AdminUsernameFormEmits } from './types';

const props = defineProps<AdminUsernameFormProps>();
const emit = defineEmits<AdminUsernameFormEmits>();

const formState = reactive<UpdateAdminUsernameDTO>({
  username: props.admin.username,
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
