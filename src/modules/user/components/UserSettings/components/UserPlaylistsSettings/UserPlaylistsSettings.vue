<template>
  <div class="user-playlists-settings">
    <template v-if="user">
      <PlaylistManager :user-id="user.id" />
    </template>
    <UIText v-else>User is not uploaded</UIText>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/modules/user/stores/user.store.ts';

const { user } = useUserStore();
</script>

<style scoped lang="scss"></style>
