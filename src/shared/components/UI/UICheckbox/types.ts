export type UICheckboxProps = {
  modelValue: boolean;
  label?: string;
  isDisabled?: boolean;
  notes?: string | string[];
};

export type UICheckboxEmits = {
  (e: 'update:modelValue', value: boolean): void;
};
