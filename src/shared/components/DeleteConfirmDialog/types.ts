export type DeleteConfirmDialogProps = {
  modelValue: boolean;
  text: string;
  isLoading?: boolean;
};

export type DeleteConfirmDialogEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
};
