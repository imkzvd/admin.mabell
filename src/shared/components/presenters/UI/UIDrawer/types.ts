export type UIDrawerProps = {
  modelValue?: boolean;
  width?: number;
};

export type UIDrawerEmits = {
  (e: 'update:modelValue', value: boolean): void;
};
