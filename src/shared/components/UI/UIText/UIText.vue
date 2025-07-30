<template>
  <p class="ui-text">
    <slot name="default" />
  </p>
</template>

<script setup lang="ts">
import type { UITextProps } from '@/shared/components/UI/UIText/types.ts';

const props = withDefaults(defineProps<UITextProps>(), {
  size: 'initial',
});

const currentColor = computed(() => (props.color ? `var(--${props.color}-color)` : 'initial'));
</script>

<style scoped lang="scss">
.ui-text {
  font-size: v-bind(size);
  color: v-bind(currentColor);
}
</style>
