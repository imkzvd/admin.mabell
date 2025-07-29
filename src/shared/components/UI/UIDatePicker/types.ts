export type UIDatePickerProps = {
  modelValue: string | null;
  label?: string;
};

export type UIDatePickerEmits = {
  (e: 'update:modelValue', value: UIDatePickerProps['modelValue']): void;
  (e: 'change', value: UIDatePickerProps['modelValue']): void;
};
