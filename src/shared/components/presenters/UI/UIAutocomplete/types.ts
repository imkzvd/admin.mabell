export type UIAutocompleteItem = {
  value: string | number;
  label: string;
};

export type UIAutocompleteProps = {
  modelValue: string | string[];
  items: UIAutocompleteItem[];
  filterMethod?: (value: string) => void;
  label?: string;
  isClearable?: boolean;
  isMultiple?: boolean;
  isLoading?: boolean;
  errorMessages?: string | string[];
};

export type UIAutocompleteEmits = {
  (e: 'update:modelValue', value: string | string[]): void;
  (e: 'update:search', value: string): void;
};
