export type GlobalSearchDialogProps = {
  modelValue: boolean;
};

export type GlobalSearchDialogEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'opened'): void;
  (e: 'closed'): void;
};
