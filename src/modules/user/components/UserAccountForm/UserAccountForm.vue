<template>
  <UIForm :is-loading="isLoading" class="user-account-form" @submit="onFormSubmit">
    <UIAutocomplete
      label="Region"
      :items="regions"
      :error-messages="validator.region.$errors.map((e) => e.$message as string)"
      v-model="state.region"
      @update:model-value="validator.region.$touch"
    />

    <UISwitch
      label="Premium"
      notes="The account will get full access to the library"
      v-model="state.isPremium"
    />

    <UISwitch
      color="warning"
      label="Block"
      notes="Temporary blocking of this user's access to the service"
      class="mb-4"
      v-model="state.isBlocked"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/user/components/UserAccountForm/constants.ts';
import type {
  UserAccountFormEmits,
  UserAccountFormProps,
} from '@/modules/user/components/UserAccountForm/types.ts';
import type { UpdateUserAccountPayload } from '@/modules/user/types.ts';

const props = defineProps<UserAccountFormProps>();
const emit = defineEmits<UserAccountFormEmits>();

const state: UpdateUserAccountPayload = reactive({
  region: props.user.region.value,
  isPremium: props.user.isPremium,
  isBlocked: props.user.isBlocked,
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
