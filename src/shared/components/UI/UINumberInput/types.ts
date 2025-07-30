import type { UISize, UIValidationRule } from '../types';

export type UINumberInputProps = {
  name: string;
  modelValue?: number;
  label?: string;
  placeholder?: string;
  size?: UISize;
  rules?: UIValidationRule[];
  errorMessages?: string | string[];
  messages?: string | string[];
  isDisabled?: boolean;
  isReadonly?: boolean;
  isClearable?: boolean;
  isAutofocused?: boolean;
  isLoading?: boolean;
  hideMessageSpace?: boolean;
  maxWidth?: string | number;
  min?: number;
  max?: number;
};

export type UINumberInputEmits = {
  (e: 'update:modelValue', value: number): void;
};
