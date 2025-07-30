<template>
  <div class="user-authentication-settings">
    <template v-if="user">
      <UIContentSection heading="Password" class="mb-10">
        <UserRefreshPassword :user="user" />
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

const { user } = useUserStore();
</script>

<style scoped lang="scss"></style>
