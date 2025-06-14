import type { UISize, UIValidationRule } from '../types';
import type { InputTypeHTMLAttribute } from 'vue';

export type UIInputProps = {
  name: string;
  modelValue?: string | null;
  type?: InputTypeHTMLAttribute;
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
};

export type UIInputEmits = {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'click:clear'): void;
};
