<template>
  <UIForm class="admin-account-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UIRadioGroup
      :items="roles"
      label="Role"
      notes="The account will have options depending on the role"
      class="admin-account-form__radio-group mb-4"
      v-model="formState.role"
    />

    <UISwitch
      label="Block"
      color="warning"
      notes="The account will be blocked from accessing the service"
      class="mb-8"
      v-model="formState.isBlocked"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type { AdminAccountFormEmits, AdminAccountFormProps } from './types';
import type { UpdateAdminDTO } from '@/api/api.module';

const props = defineProps<AdminAccountFormProps>();
const emit = defineEmits<AdminAccountFormEmits>();

const formState = reactive<Pick<UpdateAdminDTO, 'role' | 'isBlocked'>>({
  role: props.admin.role.value,
  isBlocked: props.admin.isBlocked,
});

async function onSubmitForm() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped>
.admin-account-form {
  &__radio-group {
    margin-inline: -16px;
  }
}
</style>
