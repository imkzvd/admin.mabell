<template>
  <component :is="'h' + level" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { UIHeadingProps } from '@/shared/components/UI/UIHeading/types.ts';

const props = withDefaults(defineProps<UIHeadingProps>(), {
  level: 1,
});

const rootClass = 'ui-heading';
const cssClasses = computed<Record<string, boolean>>(() => ({
  [rootClass]: true,
  [`${rootClass}_custom-size`]: !!props.size,
  'leading-none': props.leadingNone,
}));
</script>

<style scoped lang="scss">
h1 {
  font-size: 32px;
  font-weight: 400 !important;
  font-family: CircularSpTitleBold, CircularSpCyrlBold, sans-serif;
}

h2 {
  font-size: 20px;
  font-family: CircularSpTitleBold, CircularSpCyrlBold, sans-serif;
  /*font-weight: 400 !important;*/
  /*font-family: CircularSpTitleBold, sans-serif;*/
}

h3 {
  font-size: 16px !important;
  font-weight: 400 !important;
  font-family: CircularSpTitleBold, sans-serif;
}

// TODO: refactor
.leading-none {
  line-height: 1;
}

.ui-heading {
  &_custom-size {
    font-size: v-bind(size);
  }
}
</style>
