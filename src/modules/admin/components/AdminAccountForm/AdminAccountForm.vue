<template>
  <UIForm class="admin-account-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UIRadioGroup
      :items="roles"
      label="Role"
      notes="The account will have options depending on the role"
      class="admin-account-form__radio-group mb-4"
      v-model="state.role"
    />

    <UISwitch
      label="Block"
      color="warning"
      notes="The account will be blocked from accessing the service"
      class="mb-8"
      v-model="state.isBlocked"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  AdminAccountFormProps,
  AdminAccountFormEmits,
} from '@/modules/admin/components/AdminAccountForm/types.ts';
import type { UpdateAdminAccountPayload } from '@/modules/admin/types.ts';

const props = defineProps<AdminAccountFormProps>();
const emit = defineEmits<AdminAccountFormEmits>();

const state: UpdateAdminAccountPayload = reactive({
  role: props.admin.role.value,
  isBlocked: props.admin.isBlocked,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped>
.admin-account-form {
  &__radio-group {
    margin-inline: -16px;
  }
}
</style>
