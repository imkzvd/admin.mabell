export type UIRadioItem = { label: string; value: string | number };

export type UIRadioGroupProps = {
  modelValue: string | number;
  items: UIRadioItem[];
  label?: string;
  notes?: string;
};

export type UIRadioGroupEmits = {
  (e: 'update:modelValue', value: string | number): void;
};
