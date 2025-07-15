<template>
  <div class="login-view">
    <ViewHeader class="login-view__header">
      <HomeLogo width="320px" height="64px" class="login-view__home-logo" />
    </ViewHeader>

    <ViewBody class="login-view__body">
      <LoginForm
        :is-loading="authStore.isLoading"
        class="login-view__login-form"
        @submit="onSubmitForm"
      />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/features/auth/stores/auth.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { LoginFormState } from '@/features/auth/components/presenters/LoginForm/types.ts';

const router = useRouter();
const route = useRoute();
const { showErrorMessage } = useNotification();
const authStore = useAuthStore();

async function onSubmitForm(formState: LoginFormState) {
  try {
    await authStore.login(formState);
    await router.push({ name: 'authorization', query: { redirect: route.query.redirect || '/' } });
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  }
}
</script>
<style scoped lang="scss">
.login-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__home-logo {
    margin-inline: auto;
  }

  &__login-form {
    max-width: 400px;
    margin-inline: auto;
  }
}
</style>
