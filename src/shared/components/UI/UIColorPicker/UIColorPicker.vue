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
      v-model="model"
    />

    <div class="ui-color-picker__custom-action-buttons">
      <button v-if="model !== initialColor" type="button" @click.stop="onResetButtonClick">
        <UIIcon icon="mdi-restore" size="16px" />
      </button>

      <button v-if="model" type="button" @click.stop="onDeleteButtonClick">
        <UIIcon icon="ph:trash" size="16px" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  UIColorPickerEmits,
  UIColorPickerProps,
} from '@/shared/components/UI/UIColorPicker/types.ts';

const props = defineProps<UIColorPickerProps>();
const emit = defineEmits<UIColorPickerEmits>();

const model = defineModel();
const initialColor = ref<UIColorPickerProps['modelValue']>(props.modelValue);

function resetState() {
  initialColor.value = props.modelValue;
}

function onResetButtonClick() {
  emit('update:modelValue', initialColor.value);
}

function onDeleteButtonClick() {
  emit('update:modelValue', null);
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
