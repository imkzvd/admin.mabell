export type UIDatePickerProps = {
  modelValue: string;
  label?: string;
};

export type UIDatePickerEmits = {
  (e: 'update:modelValue', value: string): void;
};
