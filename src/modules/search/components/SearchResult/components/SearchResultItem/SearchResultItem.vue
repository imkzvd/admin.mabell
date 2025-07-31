<template>
  <li class="search-result-item" @click="emit('click')">
    <component :is="linkMode ? UILink : 'div'" :to="linkHref" class="search-result-item__link">
      <ImageWithFallback :url="imgSrc || null" :alt="name" :is-rounded="isImgRounded" size="40px" />

      <div class="search-result-item__details">
        <div class="search-result-item__name">
          {{ name }}
        </div>

        <div v-if="metadata && metadata.length" class="search-result-item__metadata">
          {{ Array.isArray(metadata) ? metadata.join(', ') : metadata }}
        </div>
      </div>

      <div v-if="showType" class="search-result-item__type">
        <UIChip>{{ type }}</UIChip>
      </div>
    </component>
  </li>
</template>

<script setup lang="ts">
import UILink from '@/shared/components/UI/UILink/UILink.vue';
import type {
  SearchResultItemEmits,
  SearchResultItemProps,
} from '@/modules/search/components/SearchResult/components/SearchResultItem/types.ts';

withDefaults(defineProps<SearchResultItemProps>(), {
  linkMode: true,
  showType: true,
});
const emit = defineEmits<SearchResultItemEmits>();
</script>

<style scoped lang="scss">
.search-result-item {
  font-size: 14px;
  border-radius: var(--border-radius, 4px);
  transition: 0.25s ease-in-out;
  cursor: pointer;

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
