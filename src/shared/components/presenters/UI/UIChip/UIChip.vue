<template>
  <v-chip rounded="sm" :size="size" :color="color" :append-icon="icon">
    <slot name="default" />
  </v-chip>
</template>

<script setup lang="ts">
import type { UIChipProps } from '@/shared/components/presenters/UI/UIChip/types.ts';

defineProps<UIChipProps>();
</script>

<style scoped lang="scss"></style>
