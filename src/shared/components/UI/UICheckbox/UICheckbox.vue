<template>
  <v-checkbox
    density="compact"
    class="ui-checkbox"
    :messages="notes"
    :ripple="false"
    :label="label"
    :disabled="isDisabled"
    v-model="model"
  />
</template>

<script setup lang="ts">
import type { UICheckboxProps } from '@/shared/components/UI/UICheckbox/types.ts';

defineProps<UICheckboxProps>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
