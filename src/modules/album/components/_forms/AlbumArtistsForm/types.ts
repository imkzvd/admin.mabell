import type { AlbumRO } from '@/api/api.module';
import type { UpdateAlbumArtistsPayload } from '@/modules/album/types.ts';

export type AlbumArtistsFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumArtistsFormEmits = {
  (e: 'submit', payload: UpdateAlbumArtistsPayload): void;
};
