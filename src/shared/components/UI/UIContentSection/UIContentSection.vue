<template>
  <section class="ui-content-section">
    <header v-if="$slots.header || heading" class="ui-content-section__header pb-2 mb-4">
      <slot v-if="$slots.header" name="header" />
      <UIHeading v-else-if="heading" level="2" leading-none class="ui-content-section__heading">
        {{ heading }}
      </UIHeading>
    </header>

    <div class="ui-content-section__content">
      <slot name="default" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { UIContentSectionProps } from './types';

withDefaults(defineProps<UIContentSectionProps>(), {
  maxWidth: '50%',
});
</script>

<style scoped lang="scss">
.ui-content-section {
  &__header {
    border-bottom: 1px solid var(--ui-content-section-header-border-color, rgba(255, 255, 255, 0.1));
  }

  &__content {
    max-width: v-bind(maxWidth);
  }
}
</style>
