<template>
  <div class="login-view">
    <ViewHeader class="login-view__header">
      <HomeLogo width="280px" class="login-view__home-logo" />
    </ViewHeader>

    <ViewBody class="login-view__body">
      <LoginForm
        :is-loading="loadingStates.isLoading"
        class="login-view__login-form"
        @submit="onFormSubmit"
      />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { LoginFormState } from '@/modules/auth/components/LoginForm/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const route = useRoute();
const { login, loadingStates } = useAuthStore();
const { showErrorMessage } = useNotification();

async function onFormSubmit(formState: LoginFormState) {
  try {
    await login(formState);

    const redirectPath = route.query.redirect || '/';
    await router.push({ name: 'authorization', query: { redirect: redirectPath } });
  } catch (e) {
    const { message } = e as ApiError | Error;

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

  &__header {
    text-align: center;
  }

  &__login-form {
    max-width: 400px;
    margin-inline: auto;
  }
}
</style>
