<template>
  <v-tabs density="comfortable" class="ui-tabs" v-model="model">
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
import type { UITabsEmits, UITabsProps } from '@/shared/components/UI/UITabs/types.ts';

defineProps<UITabsProps>();
defineEmits<UITabsEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
