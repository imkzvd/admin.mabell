<template>
  <v-layout>
    <v-navigation-drawer
      temporary
      location="right"
      :width="width"
      :model-value="modelValue"
      class="ui-drawer py-8"
      @update:model-value="emit('update:modelValue', $event)"
    >
      <div v-if="$slots.heading" class="ui-drawer__header mb-8">
        <div class="container">
          <slot name="heading" />
        </div>
      </div>

      <div class="ui-drawer__body">
        <div class="container">
          <slot v-if="modelValue" name="default" />
        </div>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import type { UIDrawerEmits, UIDrawerProps } from './types';

withDefaults(defineProps<UIDrawerProps>(), {
  width: 400,
  modelValue: false,
});
const emit = defineEmits<UIDrawerEmits>();
</script>

<style scoped lang="scss"></style>
