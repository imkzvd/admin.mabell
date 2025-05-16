<template>
  <v-layout>
    <v-navigation-drawer
      temporary
      location="right"
      :width="width"
      :model-value="modelValue"
      class="ui-drawer py-8"
      @update:model-value="onUpdateModelValue"
    >
      <UISpinner v-if="isLoading" is-centered />
      <template v-else>
        <div v-if="$slots.header" class="ui-drawer__header mb-8">
          <div class="container">
            <slot name="header" />
          </div>
        </div>

        <div class="ui-drawer__body">
          <div class="container">
            <slot v-if="modelValue" name="default" />
          </div>
        </div>
      </template>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup lang="ts">
import type { UIDrawerEmits, UIDrawerProps } from './types';

withDefaults(defineProps<UIDrawerProps>(), {
  width: 400,
  modelValue: false,
});

function onUpdateModelValue(value: boolean) {
  emit('update:modelValue', value);

  if (value) {
    emit('opened');
  } else {
    emit('closed');
  }
}
const emit = defineEmits<UIDrawerEmits>();
</script>

<style scoped lang="scss">
:deep(.v-navigation-drawer__scrim) {
  background-color: rgb(173 173 173 / 5%);
  backdrop-filter: blur(10px) saturate(110%);
  opacity: initial;
}
</style>
