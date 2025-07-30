<template>
  <v-switch
    density="comfortable"
    class="ui-switch"
    :ripple="false"
    :messages="notes"
    :label="label"
    :color="color"
    :disabled="isDisabled"
    v-model="model"
  />
</template>

<script setup lang="ts">
import type { UISwitchEmits, UISwitchProps } from '@/shared/components/UI/UISwitch/types.ts';

withDefaults(defineProps<UISwitchProps>(), {
  color: 'success',
});
defineEmits<UISwitchEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
