export type UIDialogProps = {
  modelValue: boolean;
  maxWidth: string | number;
  heading?: string;
};

export type UIDialogEmits = {
  (e: 'update:modelValue', value: boolean): void;
};
