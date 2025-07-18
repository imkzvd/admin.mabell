<template>
  <div class="user-view">
    <UISpinner v-if="userStore.loadingState.isFetching" is-centered />
    <template v-else-if="userStore.user">
      <ViewHeader>
        <UIText color="secondary" size="12px" class="mb-1">User</UIText>

        <UIHeading leading-none>{{ userStore.user.name }}</UIHeading>
      </ViewHeader>

      <ViewBody>
        <UITabs :items="userTabs" class="mb-10" v-model="activeTab" />

        <component :is="userTabComponents[activeTab]" />
      </ViewBody>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import { userTabComponents, userTabs, UserTabsEnum } from '@/modules/user/constants/user-tabs.ts';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const activeTab = ref<UserTabsEnum>(UserTabsEnum.PROFILE);

const userId = computed<string>(() => route.params.id as string);

onMounted(async () => {
  try {
    await userStore.fetchUser(userId.value);
  } catch (e) {
    throw e;
  }
});

watch(userId, (value: string, oldValue?: string) => {
  if (value && value === oldValue) return;

  userStore.fetchUser(value);
});

watch(
  () => userStore.user,
  (value) => {
    if (value === null) {
      console.log('USER DELETED');
      router.push({ name: 'home' });
    }
  },
);
</script>

<style scoped lang="scss"></style>
