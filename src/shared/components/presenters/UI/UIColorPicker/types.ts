import type UIColorPicker from '@/shared/components/presenters/UI/UIColorPicker/UIColorPicker.vue';

export type UIColorPickerProps = {
  modelValue: string | null;
  label?: string;
  width?: string;
};

export type UIColorPickerEmits = {
  (e: 'update:modelValue', value: string | null): void;
};

export type UIColorPickerInstance = InstanceType<typeof UIColorPicker>;
