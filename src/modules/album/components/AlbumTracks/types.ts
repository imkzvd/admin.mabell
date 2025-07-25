import type { TrackRO } from '@/api/api.module.ts';
import type AlbumTracks from '@/modules/album/components/AlbumTracks/AlbumTracks.vue';

export type AlbumTracksProps = {
  albumId: string;
};

export type AlbumTracksEmits = {
  (e: 'item-click', item: TrackRO, index: number): void;
};

export type AlbumTracksInstance = InstanceType<typeof AlbumTracks>;
