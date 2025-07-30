<template>
  <RouterLink :to="to" class="ui-link" :class="cssClasses">
    <slot name="default">Link</slot>
  </RouterLink>
</template>

<script setup lang="ts">
import type { UILinkProps } from '@/shared/components/UI/UILink/types.ts';

const props = defineProps<UILinkProps>();

const cssClasses = computed<Record<string, boolean>>(() => ({
  'ui-link_is-underlined': props.isUnderlined,
}));
</script>

<style scoped lang="scss">
.ui-link {
  color: #cccccc;

  &:hover {
    color: #ffffff;
  }

  &_is-underlined {
    text-decoration: underline;
  }
}
</style>
