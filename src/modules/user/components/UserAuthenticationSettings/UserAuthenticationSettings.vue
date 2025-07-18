<template>
  <div class="user-authentication-settings">
    <template v-if="userStore.user">
      <UIContentSection heading="Password" class="mb-10">
        <UserRefreshPassword :user="userStore.user" />
      </UIContentSection>

      <UIContentSection heading="Sessions">
        <UIText color="secondary">List ...</UIText>
      </UIContentSection>
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/modules/user/stores/user.store.ts';
import UserRefreshPassword from '@/modules/user/components/UserRefreshPassword/UserRefreshPassword.vue';

const userStore = useUserStore();
</script>

<style scoped lang="scss"></style>
