<template>
  <div class="user-account-settings">
    <UIContentSection v-if="userStore.user" heading="Username" class="mb-10">
      <UserUsernameForm
        :user="userStore.user"
        :is-loading="userStore.isUserUsernameUpdating"
        @submit="onSubmitUserUsernameForm"
      />
    </UIContentSection>

    <UIContentSection v-if="userStore.user" heading="E-Mail" class="mb-10">
      <UserEmailForm
        :user="userStore.user"
        :is-loading="userStore.isUserEmailUpdating"
        @submit="onSubmitUserEmailForm"
      />
    </UIContentSection>

    <UIContentSection v-if="userStore.user" heading="Settings" class="mb-10">
      <UserAccountForm
        :user="userStore.user"
        :regions="metadataStore.regions"
        :is-loading="userStore.isUserUpdating"
        @submit="onSubmitUserAccountForm"
      />
    </UIContentSection>

    <UIContentSection heading="Delete Account">
      <DeleteButton @click="onClickDeleteButton" />
    </UIContentSection>

    <DeleteConfirmationDialog
      v-if="userStore.user"
      :text="userStore.user.name"
      :is-loading="userStore.isUserDeleting"
      v-model="isDeleteDialogVisible"
      @confirm="onConfirmDeletion"
    />
  </div>
</template>

<script setup lang="ts">
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import type { UpdateUserAccountFormState } from '@/modules/user/components/presenters/UserAccountForm/types.ts';
import type { UserUsernameFormState } from '@/modules/user/components/presenters/UserUsernameForm/types.ts';
import type { UpdateUserEmailFormState } from '@/modules/user/components/presenters/UserEmailForm/types.ts';

const router = useRouter();
const metadataStore = useMetadataStore();
const userStore = useUserStore();
const { showSuccessMessage, showErrorMessage } = useNotification();
const [isDeleteDialogVisible, toggleDeleteDialogVisible] = useToggle();

function onClickDeleteButton() {
  toggleDeleteDialogVisible();
}

async function onSubmitUserAccountForm(formState: UpdateUserAccountFormState) {
  try {
    await userStore.updateUser(formState);

    showSuccessMessage('Settings have been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onSubmitUserUsernameForm(formState: UserUsernameFormState) {
  try {
    await userStore.updateUserUsername(formState);

    showSuccessMessage('Username has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onSubmitUserEmailForm(formState: UpdateUserEmailFormState) {
  try {
    await userStore.updateUserEmail(formState);

    showSuccessMessage('E-mail has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}

async function onConfirmDeletion() {
  try {
    await userStore.deleteUser();
    await router.push({ name: 'home' });
    showSuccessMessage('User has been deleted');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
