import type { AlbumRO } from '@/api/api.module.ts';

export type ArtistAlbumsProps = {
  artistId: string;
};

export type ArtistAlbumsEmits = {
  (e: 'item-click', album: AlbumRO, index: number): void;
};
