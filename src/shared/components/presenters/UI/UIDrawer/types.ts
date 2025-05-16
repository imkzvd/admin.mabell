export type UIDrawerProps = {
  modelValue?: boolean;
  width?: number;
  isLoading?: boolean;
};

export type UIDrawerEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'opened'): void;
  (e: 'closed'): void;
};
