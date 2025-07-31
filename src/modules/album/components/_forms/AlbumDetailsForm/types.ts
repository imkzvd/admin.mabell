import type { AlbumRO, LabelValueRO } from '@/api/api.module';
import type { UpdateAlbumProfilePayload } from '@/modules/album/types.ts';

export type AlbumDetailsFormProps = {
  album: AlbumRO;
  genres: LabelValueRO[];
  albumTypes: LabelValueRO[];
  isLoading?: boolean;
};

export type AlbumDetailsFormEmits = {
  (e: 'submit', payload: UpdateAlbumProfilePayload): void;
};
