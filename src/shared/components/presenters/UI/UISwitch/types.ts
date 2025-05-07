import type { UIColor } from '@/shared/components/presenters/UI/types.ts';

export type UISwitchProps = {
  modelValue: boolean;
  label?: string;
  color?: UIColor;
  notes?: string;
  isDisabled?: boolean;
};

export type UISwitchEmits = {
  (e: 'update:modelValue', value: boolean): void;
};
