<template>
  <li class="search-result-item">
    <UILink :to="linkHref" class="search-result-item__link">
      <ImageWithFallback :url="imgSrc || null" :alt="name" :is-rounded="isImgRounded" size="40px" />

      <div class="search-result-item__details">
        <div class="search-result-item__name">
          {{ name }}
        </div>

        <div v-if="metadata && metadata.length" class="search-result-item__metadata">
          {{ Array.isArray(metadata) ? metadata.join(', ') : metadata }}
        </div>
      </div>

      <div class="search-result-item__type">
        <UIChip>{{ type }}</UIChip>
      </div>
    </UILink>
  </li>
</template>

<script setup lang="ts">
import type { SearchResultItemProps } from '@/features/search/components/presenters/SearchResult/types.ts';

defineProps<SearchResultItemProps>();
</script>

<style scoped lang="scss">
.search-result-item {
  font-size: 14px;
  border-radius: var(--border-radius, 4px);
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &__link {
    display: flex;
    align-items: center;
    column-gap: 16px;
    padding: 8px 16px;
    color: var(--white-color, #fff);
  }

  &__metadata {
    font-size: 12px;
    color: var(--secondary-color, #ccc);
  }

  &__type {
    color: var(--gray-color, #ccc);
    margin-left: auto;
  }
}
</style>
