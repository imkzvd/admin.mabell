<template>
  <SearchResultItem
    :name="item.name"
    :metadata="item.email"
    type="User"
    :img-src="item.avatar"
    is-img-rounded
    :link-href="`/user/${item.id}`"
  />
</template>

<script setup lang="ts">
import type { UserSearchResultItemProps } from '@/features/search/components/presenters/UserSearchResultItem/types.ts';

defineProps<UserSearchResultItemProps>();
</script>

<style scoped lang="scss"></style>
