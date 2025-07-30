<template>
  <v-select
    density="comfortable"
    item-title="label"
    variant="solo-filled"
    :clearable="isClearable"
    :items="items"
    :label="label"
    :multiple="isMultiple"
    v-model="model"
  />
</template>

<script setup lang="ts">
import type { UISelectEmits, UISelectProps } from '@/shared/components/UI/UISelect/types.ts';

defineProps<UISelectProps>();
defineEmits<UISelectEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
