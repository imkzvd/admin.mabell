<template>
  <UIForm class="admin-profile-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="formState.name"
      @blur="validator.name.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from './constants';
import type { AdminProfileFormProps, AdminProfileFormEmits } from './types';
import type { UpdateAdminDTO } from '@/api/api.module';

const props = defineProps<AdminProfileFormProps>();
const emit = defineEmits<AdminProfileFormEmits>();

const formState = reactive<Pick<UpdateAdminDTO, 'name'>>({
  name: props.admin.name,
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
