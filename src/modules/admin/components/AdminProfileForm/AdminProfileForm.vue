<template>
  <UIForm class="admin-profile-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @blur="validator.name.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/admin/components/AdminProfileForm/constants.ts';
import type {
  AdminProfileFormProps,
  AdminProfileFormEmits,
} from '@/modules/admin/components/AdminProfileForm/types.ts';
import type { UpdateAdminProfilePayload } from '@/modules/admin/types.ts';

const props = defineProps<AdminProfileFormProps>();
const emit = defineEmits<AdminProfileFormEmits>();

const state: UpdateAdminProfilePayload = reactive({
  name: props.admin.name,
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
