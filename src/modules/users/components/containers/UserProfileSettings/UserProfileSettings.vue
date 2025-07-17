<template>
  <div class="user-profile-settings">
    <UIContentSection v-if="userStore.user" heading="Public Info">
      <UserProfileForm
        :user="userStore.user"
        :genres="metadataStore.genres"
        :is-loading="userStore.isUserUpdating"
        @submit="onSubmitUserProfileForm"
      />
    </UIContentSection>
  </div>
</template>

<script setup lang="ts">
import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useUserStore } from '@/features/users/stores/user.store.ts';
import type { UserProfileFormState } from '@/features/users/components/presenters/UserProfileForm/types.ts';

const { showSuccessMessage, showErrorMessage } = useNotification();
const metadataStore = useMetadataStore();
const userStore = useUserStore();

async function onSubmitUserProfileForm(formState: UserProfileFormState) {
  try {
    await userStore.updateUser(formState);

    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
