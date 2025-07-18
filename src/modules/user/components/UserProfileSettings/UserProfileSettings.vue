<template>
  <div class="user-profile-settings">
    <template v-if="userStore.user">
      <UIContentSection heading="Profile">
        <UserProfileForm
          :user="userStore.user"
          :genres="genres"
          :is-loading="userStore.loadingState.isUpdating"
          @submit="onUserProfileFormSubmit"
        />
      </UIContentSection>
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import type { UpdateUserProfilePayload } from '@/modules/user/types.ts';

const { genres } = useMetadata();
const { showSuccessMessage, showErrorMessage } = useNotification();
const userStore = useUserStore();

async function onUserProfileFormSubmit(payload: UpdateUserProfilePayload) {
  try {
    await userStore.updateUser(payload);

    showSuccessMessage('Profile has been updated');
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>

<style scoped lang="scss"></style>
