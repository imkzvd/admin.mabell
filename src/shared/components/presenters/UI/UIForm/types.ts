export type UIFormProps = {
  isLoading?: boolean;
  messages?: {
    submitButton?: string;
  };
};

export type UIFormEmits = {
  (e: 'submit', evt: SubmitEvent): void;
  (e: 'reset'): void;
};
