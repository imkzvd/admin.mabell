<template>
  <v-dialog
    :model-value="modelValue"
    :max-width="maxWidth"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <template v-if="$slots.header || heading" #title>
        <slot v-if="$slots.header" name="header" />
        <UIHeading v-else-if="heading" level="2" leading-none>{{ heading }}</UIHeading>
      </template>

      <template #text>
        <slot name="default" />
      </template>

      <template v-if="$slots.footer" #actions>
        <slot name="footer" />
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { UIDialogEmits, UIDialogProps } from './types';

defineProps<UIDialogProps>();
const emit = defineEmits<UIDialogEmits>();
</script>

<style scoped>
:deep(.v-overlay__scrim) {
  background-color: rgb(173 173 173 / 5%);
  backdrop-filter: blur(10px) saturate(110%);
  opacity: initial;
}
</style>
