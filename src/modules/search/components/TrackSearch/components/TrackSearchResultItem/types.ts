import type { IndexedTrackRO } from '@/api/api.module.ts';

export type TrackSearchResultItemProps = {
  item: IndexedTrackRO;
  linkMode?: boolean;
  showType?: boolean;
};

export type TrackSearchResultItemEmits = {
  (e: 'click:item', item: IndexedTrackRO): void;
};
