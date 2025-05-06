<template>
  <v-switch
    density="compact"
    class="ui-switch"
    :ripple="false"
    :messages="notes"
    :label="label"
    :color="color"
    :disabled="isDisabled"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', !!$event)"
  />
</template>

<script setup lang="ts">
import type { UISwitchEmits, UISwitchProps } from './types';

withDefaults(defineProps<UISwitchProps>(), {
  color: 'success',
});
const emit = defineEmits<UISwitchEmits>();
</script>

<style scoped lang="scss"></style>
