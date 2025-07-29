export type UISelectItem = {
  value: string | number;
  label: string;
};

export type UISelectProps = {
  modelValue: string | string[];
  items: UISelectItem[];
  label?: string;
  isMultiple?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
};

export type UISelectEmits = {
  (e: 'update:modelValue', value: string | string[]): void;
};
