<template>
  <div class="mabell-user-view">
    <UISpinner v-if="loadingState.isFetching" is-centered />
    <template v-else-if="user">
      <ViewHeader class="mabell-user-view__header">
        <div class="mabell-user-view__header-columns">
          <ImageWithFallback
            :url="user?.avatar && `${user.avatar}?${Date.now()}`"
            :alt="user?.name"
            size="80px"
            is-rounded
          />

          <div class="mabell-user-view__details">
            <div class="mabell-user-view__details-top-line mb-2">
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

const { fetchMabellUser, user, loadingState } = useUserStore();

onMounted(() => fetchMabellUser());
</script>

<style scoped lang="scss">
.mabell-user-view {
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
