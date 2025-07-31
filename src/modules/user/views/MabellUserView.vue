<template>
  <div class="mabell-user-view">
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

const { fetchMabellUser, user, loadingState } = useUserStore();

onMounted(() => fetchMabellUser());
</script>

<style scoped lang="scss"></style>
