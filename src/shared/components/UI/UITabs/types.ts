export type UITabsProps = {
  modelValue: string | number;
  items: UITabsItem[];
};

export type UITabsItem = {
  label: string;
  value: string | number;
  icon?: string;
};

export type UITabsEmits = {
  (e: 'update:modelValue', value: string | number): void;
};
