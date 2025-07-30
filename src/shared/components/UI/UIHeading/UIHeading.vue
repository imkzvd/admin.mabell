<template>
  <component :is="'h' + level" class="ui-heading" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { UIHeadingProps } from '@/shared/components/UI/UIHeading/types.ts';

const props = withDefaults(defineProps<UIHeadingProps>(), {
  level: 1,
});

const cssClasses = computed<Record<string, boolean>>(() => ({
  'leading-none': props.leadingNone,
}));
</script>

<style scoped lang="scss">
h1 {
  font-size: 32px !important;
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
</style>
