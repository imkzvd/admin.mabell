<template>
  <div class="user-view">
    <UISpinner v-if="loadingState.isFetching" is-centered />
    <template v-else-if="user">
      <ViewHeader class="user-view__header">
        <div class="user-view__header-columns">
          <ImageWithFallback
            :url="user?.avatar && `${user.avatar}?${Date.now()}`"
            :alt="user?.name"
            size="80px"
            is-rounded
          />

          <div class="user-view__details">
            <div class="user-view__details-top-line mb-1">
              <UIText color="secondary" size="14px">User</UIText>

              <UIIcon v-if="user?.isBlocked" icon="mdi-cancel" size="16px" />
            </div>

            <UIHeading leading-none>{{ user.name }}</UIHeading>
          </div>
        </div>
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

<style scoped lang="scss">
.user-view {
  &__header-columns {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__details-top-line {
    display: flex;
    align-items: center;
    column-gap: 2px;
    color: var(--secondary-color);
    line-height: 1;
  }
}
</style>
