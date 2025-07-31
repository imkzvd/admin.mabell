import type { IndexedTrackRO } from '@/api/api.module.ts';

export type TrackSearchProps = {
  linkMode?: boolean;
  showType?: boolean;
};

export type TrackSearchEmits = {
  (e: 'click:item', item: IndexedTrackRO): void;
};
