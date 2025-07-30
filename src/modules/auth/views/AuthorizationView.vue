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
import { useAuthStore } from '@/modules/auth/stores/auth.store.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { useMetadataStore } from '@/modules/metadata/stores/metadata.store.ts';
import type { ApiError } from '@/shared/errors/api-error.ts';

const router = useRouter();
const route = useRoute();
const { authorization } = useAuthStore();
const { fetchAllMetadata } = useMetadataStore();
const { showErrorMessage } = useNotification();

onMounted(async () => {
  try {
    await authorization();
    await fetchAllMetadata();

    const redirectPath = (route.query.redirect as string) || '/';

    await router.push(redirectPath);
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
