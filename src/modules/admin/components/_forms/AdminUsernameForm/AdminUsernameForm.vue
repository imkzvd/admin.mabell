<template>
  <UIForm class="admin-username-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UIInput
      name="username"
      label="Username"
      placeholder="Enter the username"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="state.username"
      @blur="validator.username.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/admin/components/_forms/AdminUsernameForm/constants.ts';
import type {
  AdminUsernameFormProps,
  AdminUsernameFormEmits,
} from '@/modules/admin/components/_forms/AdminUsernameForm/types.ts';
import type { UpdateAdminUsernamePayload } from '@/modules/admin/types.ts';

const props = defineProps<AdminUsernameFormProps>();
const emit = defineEmits<AdminUsernameFormEmits>();

const state: UpdateAdminUsernamePayload = reactive({
  username: props.admin.username,
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
