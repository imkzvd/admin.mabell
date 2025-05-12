export type UIDatePickerProps = {
  modelValue: string | null;
  label?: string;
};

export type UIDatePickerEmits = {
  (e: 'update:modelValue', value: string | null): void;
};
