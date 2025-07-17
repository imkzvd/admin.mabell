export type TrackSettingsDrawerProps = {
  modelValue: boolean;
};

export type TrackSettingsDrawerEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'opened'): void;
  (e: 'closed'): void;
};
