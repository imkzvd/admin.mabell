<template>
  <v-radio-group density="comfortable" :label="label" :messages="notes" inline v-model="model">
    <v-radio v-for="item of items" :key="item.label" :label="item.label" :value="item.value" />
  </v-radio-group>
</template>

<script setup lang="ts">
import type {
  UIRadioGroupEmits,
  UIRadioGroupProps,
} from '@/shared/components/UI/UIRadioGroup/types.ts';

defineProps<UIRadioGroupProps>();
defineEmits<UIRadioGroupEmits>();

const model = defineModel();
</script>

<style scoped></style>
