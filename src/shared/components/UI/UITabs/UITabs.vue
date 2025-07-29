<template>
  <v-tabs
    density="comfortable"
    :model-value="modelValue"
    class="ui-tabs"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <v-tab
      v-for="item of items"
      :key="item.value"
      :value="item.value"
      :prepend-icon="item.icon"
      variant="flat"
    >
      {{ item.label }}
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import type { UITabsEmits, UITabsProps } from './types';

defineProps<UITabsProps>();
const emit = defineEmits<UITabsEmits>();
</script>

<style scoped lang="scss"></style>
