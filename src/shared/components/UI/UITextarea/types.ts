export type UITextareaProps = {
  modelValue: string;
  label?: string;
  maxLength?: number | string;
  isLoading?: boolean;
};

export type UITextareaEmits = {
  (e: 'update:modelValue', value: string): void;
};
