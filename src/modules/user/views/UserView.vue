<template>
  <div class="user-view">
    <UISpinner v-if="userStore.isUserFetching" />
    <template v-else-if="userStore.user">
      <ViewHeader class="user-view__header">
        <UIText color="secondary" size="12px" class="mb-1">User</UIText>

        <UIHeading leading-none>{{ userStore.user.name }}</UIHeading>
      </ViewHeader>

      <ViewBody class="user-view__body">
        <UITabs :items="userTabs" class="mb-10" v-model="activeTab" />

        <component :is="userTabComponents[activeTab]" />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/features/user/stores/user.store.ts';
import { userTabComponents, userTabs, UserTabsEnum } from '@/features/user/constants/user-tabs.ts';

const route = useRoute();
const userStore = useUserStore();

const activeTab = ref<UserTabsEnum>(UserTabsEnum.PROFILE);

const userId = computed<string>(() => route.params.id as string);

onMounted(() => userStore.fetchUser(userId.value));

watch(userId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  userStore.fetchUser(value);
});
</script>

<style scoped lang="scss"></style>
