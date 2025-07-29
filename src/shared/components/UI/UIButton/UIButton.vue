<template>
  <v-btn
    :ripple="false"
    :type="type"
    :size="size"
    :color="color"
    :block="isBlock"
    :loading="isLoading"
    :disabled="isDisabled"
    :icon="icon"
  >
    <template v-if="!icon" #default>
      <slot name="default">Button</slot>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import type { UIButtonProps } from './types.ts';

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  size: 'default',
  color: 'primary',
});
</script>

<style scoped lang="scss"></style>
