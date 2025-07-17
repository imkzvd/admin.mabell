<template>
  <div class="authorization-view">
    <ViewHeader>
      <HomeLogo width="280px" />
    </ViewHeader>

    <ViewBody>
      <UISpinner />
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/features/auth/composables/useAuth.ts';
import { useMetadata } from '@/features/metadata/composables/useMetadata.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const route = useRoute();
const { authorization } = useAuth();
const { fetch: fetchMetadata } = useMetadata();
const { showErrorMessage } = useNotification();

onMounted(async () => {
  try {
    await authorization();
    await fetchMetadata();
    await router.push((route.query.redirect as string) || '/');
  } catch (e) {
    const { message } = e as ApiError | Error;

    await router.push({ name: 'login' });
    showErrorMessage(message);
  }
});
</script>

<style scoped lang="scss">
.authorization-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
