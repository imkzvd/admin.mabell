export type UIColorPickerProps = {
  modelValue: string | null;
  label?: string;
  width?: string | number;
};

export type UIColorPickerEmits = {
  (e: 'update:modelValue', value: string | null): void;
};
