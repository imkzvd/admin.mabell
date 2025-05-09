export type UIFormProps = {
  isLoading?: boolean;
};

export type UIFormEmits = {
  (e: 'submit', evt: SubmitEvent): void;
  (e: 'reset'): void;
};
