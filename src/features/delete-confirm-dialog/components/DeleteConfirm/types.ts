export type DeleteConfirmationProps = {
  text: string;
  isLoading?: boolean;
};

export type DeleteConfirmationEmits = {
  (e: 'confirm'): void;
};
