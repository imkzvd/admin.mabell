<template>
  <div class="ui-color-picker">
    <UIText v-if="label" class="mb-2">{{ label }}</UIText>

    <v-color-picker
      :rounded="false"
      border
      height="300px"
      mode="hex"
      :modes="['hex']"
      :width="width"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
    />

    <div class="ui-color-picker__custom-action-buttons">
      <button v-if="modelValue !== initialColor" type="button" @click.stop="onClickResetButton">
        <UIIcon icon="mdi-restore" size="16px" />
      </button>

      <button v-if="modelValue" type="button" @click.stop="onClickDeleteButton">
        <UIIcon icon="ph:trash" size="16px" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UIColorPickerEmits, UIColorPickerProps } from './types';

const props = defineProps<UIColorPickerProps>();
const emit = defineEmits<UIColorPickerEmits>();

const initialColor = ref<UIColorPickerProps['modelValue']>(props.modelValue);

function onClickResetButton() {
  emit('update:modelValue', initialColor.value);
}

function onClickDeleteButton() {
  emit('update:modelValue', null);
}

function resetState() {
  initialColor.value = props.modelValue;
}

defineExpose({
  resetState,
});
</script>

<style scoped lang="scss">
.ui-color-picker {
  position: relative;

  &__custom-action-buttons {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    column-gap: 4px;
  }

  :deep(.v-color-picker) {
    border: 2px solid var(--border-color);
  }

  :deep(.v-color-picker-edit__input span) {
    display: none;
  }
}
</style>
