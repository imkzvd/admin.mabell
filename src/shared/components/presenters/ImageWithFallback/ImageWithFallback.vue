<template>
  <div class="image-with-fallback" :class="cssClasses">
    <img v-if="url" :src="url" :alt="alt" class="image-with-fallback__img" />
    <Icon
      v-else
      role="presentation"
      aria-hidden="true"
      icon="ph:image-fill"
      class="image-with-fallback__icon"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { ImageWithFallbackProps } from './types';

const props = withDefaults(defineProps<ImageWithFallbackProps>(), {
  size: '40px',
});

const cssClasses = computed<Record<string, string | number | boolean>>(() => ({
  'image-with-fallback_has-border': !props.url,
  'image-with-fallback_is-rounded': props.isRounded,
}));
</script>

<style scoped lang="scss">
.image-with-fallback {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--border-radius, 4px);
  border: 0.5px solid transparent;
  height: v-bind(size);
  width: v-bind(size);
  flex-shrink: 0;

  &_has-border {
    border-color: var(--border-color, #cccccc);
  }

  &_is-rounded {
    border-radius: 100%;
  }

  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &__icon {
    color: var(--main-text, #ffffff);
    height: calc(v-bind(size) / 2);
    width: calc(v-bind(size) / 2);
  }
}
</style>
