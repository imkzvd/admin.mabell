import type TrackSettingsDrawer from '@/modules/album/components/TrackSettingsDrawer/TrackSettingsDrawer.vue';

export type TrackSettingsDrawerProps = {
  modelValue: boolean;
};

export type TrackSettingsDrawerEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'opened'): void;
  (e: 'closed'): void;
};

export type TrackSettingsDrawerInstance = InstanceType<typeof TrackSettingsDrawer>;
