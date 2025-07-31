<template>
  <SearchResultItem
    type="User"
    is-img-rounded
    :name="item.name"
    :metadata="item.email"
    :img-src="item.avatar"
    :link-href="`/user/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { UserSearchResultItemProps } from '@/modules/search/components/UserSearch/components/UserSearchResultItem/types.ts';

defineProps<UserSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
