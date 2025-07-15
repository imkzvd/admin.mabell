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
import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';
import { useAuthStore } from '@/features/auth/stores/auth.store.ts';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const metadataStore = useMetadataStore();

onBeforeMount(async () => {
  try {
    await authStore.authorization();
    await metadataStore.fetchMetadata();
    await router.push((route.query.redirect as string) || '/');
  } catch {
    router.push({ name: 'login' });
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
