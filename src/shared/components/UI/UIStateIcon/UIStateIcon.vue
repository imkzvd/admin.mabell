<template>
  <Icon
    :icon="value ? 'ph:plus-bold' : 'ph:minus-bold'"
    :width="size"
    :height="size"
    class="ui-state-icon"
  />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { UIStateIconProps } from '@/shared/components/UI/UIStateIcon/types.ts';

withDefaults(defineProps<UIStateIconProps>(), {
  size: '16px',
});
</script>

<style scoped lang="scss"></style>
