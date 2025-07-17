<template>
  <UIForm class="user-account-form" @submit="onSubmit">
    <UIAutocomplete
      label="Region"
      :items="regions"
      :error-messages="validator.region.$errors.map((e) => e.$message as string)"
      v-model="formState.region"
      @update:model-value="validator.region.$touch"
    />

    <UISwitch
      label="Premium"
      notes="The account will get full access to the library"
      v-model="formState.isPremium"
    />

    <UISwitch
      color="warning"
      label="Block"
      notes="Temporary blocking of this user's access to the service"
      class="mb-4"
      v-model="formState.isBlocked"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/features/users/components/presenters/UserAccountForm/constants.ts';
import type {
  UpdateUserAccountFormState,
  UserAccountFormEmits,
  UserAccountFormProps,
} from '@/features/users/components/presenters/UserAccountForm/types.ts';

const props = defineProps<UserAccountFormProps>();
const emit = defineEmits<UserAccountFormEmits>();

const formState = reactive<UpdateUserAccountFormState>({
  region: props.user.region.value || props.regions[0].value,
  isPremium: props.user.isPremium ?? false,
  isBlocked: props.user.isBlocked ?? false,
});

const validator = useVuelidate(validRules, formState);

async function onSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
