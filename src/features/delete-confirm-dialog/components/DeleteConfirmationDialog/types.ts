export type DeleteConfirmationDialogProps = {
  modelValue: boolean;
  text: string;
  isLoading?: boolean;
};

export type DeleteConfirmationDialogEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
};
