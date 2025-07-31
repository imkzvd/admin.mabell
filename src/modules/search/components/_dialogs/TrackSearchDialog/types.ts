import type { IndexedTrackRO } from '@/api/api.module.ts';

export type TrackSearchDialogProps = {
  modelValue: boolean;
  linkMode?: boolean;
  showType?: boolean;
};

export type TrackSearchDialogEmits = {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click:item', item: IndexedTrackRO): void;
};
