import type { TrackRO } from '@/api/api.module.ts';

export type AlbumTracksProps = {
  albumId: string;
};

export type AlbumTracksEmits = {
  (e: 'item-click', item: TrackRO, index: number): void;
};
