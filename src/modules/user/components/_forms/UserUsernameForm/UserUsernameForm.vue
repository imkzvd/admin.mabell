<template>
  <UIForm :is-loading="isLoading" class="user-username-form" @submit="onSubmitForm">
    <UIInput
      name="username"
      label="Username"
      :error-messages="validator.username.$errors.map((e) => e.$message as string)"
      v-model="state.username"
      @change="validator.username.$touch"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/user/components/_forms/UserUsernameForm/constants.ts';
import type {
  UserUsernameFormEmits,
  UserUsernameFormProps,
} from '@/modules/user/components/_forms/UserUsernameForm/types.ts';
import type { UpdateUserUsernamePayload } from '@/modules/user/types.ts';

const props = defineProps<UserUsernameFormProps>();
const emit = defineEmits<UserUsernameFormEmits>();

const state: UpdateUserUsernamePayload = reactive({
  username: props.user.username,
});

const validator = useVuelidate(validRules, state);

async function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
