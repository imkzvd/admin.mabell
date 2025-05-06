<template>
  <v-progress-circular
    indeterminate
    :color="color"
    :size="size"
    :width="width"
    :class="cssClasses"
  />
</template>

<script setup lang="ts">
import type { UISpinnerProps } from './types';

const props = withDefaults(defineProps<UISpinnerProps>(), {
  size: 40,
  width: 8,
  color: 'white',
});

const rootClass = 'ui-spinner';
const cssClasses = computed(() => ({
  [rootClass]: true,
  [`${rootClass}_is-centered`]: props.isCentered,
}));
</script>

<style lang="scss" scoped>
.ui-spinner {
  &_is-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
