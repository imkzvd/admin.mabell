<template>
  <Icon :width="size" :height="size" :icon="icon" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { UIIconProps } from './types';

withDefaults(defineProps<UIIconProps>(), {
  size: '20px',
});
</script>

<style scoped lang="scss"></style>
