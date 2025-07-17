<template>
  <div class="login-view">
    <ViewHeader>
      <HomeLogo width="280px" />
    </ViewHeader>

    <ViewBody>
      <LoginForm :is-loading="isLoading" class="login-view__login-form" @submit="onSubmitForm" />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/features/auth/composables/useAuth.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { LoginFormState } from '@/features/auth/components/LoginForm/types.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const route = useRoute();
const { login, isLoading } = useAuth();
const { showErrorMessage } = useNotification();

async function onSubmitForm(formState: LoginFormState) {
  try {
    await login(formState);
    await router.push({ name: 'authorization', query: { redirect: route.query.redirect || '/' } });
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
  text-align: center;

  &__login-form {
    max-width: 400px;
    margin-inline: auto;
  }
}
</style>
