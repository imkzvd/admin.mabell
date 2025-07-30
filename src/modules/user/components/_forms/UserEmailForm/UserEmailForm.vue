<template>
  <UIForm :is-loading="isLoading" class="user-email-form" @submit="onSubmitForm">
    <UIInput
      name="email"
      label="E-Mail"
      :error-messages="validator.email.$errors.map((e) => e.$message as string)"
      v-model="formState.email"
      @change="validator.email.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/user/components/_forms/UserEmailForm/constants.ts';
import type {
  UserEmailFormEmits,
  UserEmailFormProps,
} from '@/modules/user/components/_forms/UserEmailForm/types.ts';
import type { UpdateUserEmailPayload } from '@/modules/user/types.ts';

const props = defineProps<UserEmailFormProps>();
const emit = defineEmits<UserEmailFormEmits>();

const formState: UpdateUserEmailPayload = reactive({
  email: props.user.email || '',
});

const validator = useVuelidate(validRules, formState);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
