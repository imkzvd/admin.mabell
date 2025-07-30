<template>
  <div class="user-view">
    <UISpinner v-if="loadingState.isFetching" is-centered />
    <template v-else-if="user">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">User</UIText>

        <UIHeading leading-none>{{ user.name }}</UIHeading>
      </ViewHeader>

      <ViewBody>
        <UserSettings />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/modules/user/stores/user.store.ts';

const route = useRoute();
const { fetchUser, user, loadingState } = useUserStore();

const userId = computed<string>(() => route.params.id as string);

onMounted(() => fetchUser(userId.value));

watch(userId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  fetchUser(value);
});
</script>

<style scoped lang="scss"></style>
