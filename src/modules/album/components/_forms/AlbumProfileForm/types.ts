import type { AlbumRO, LabelValueRO } from '@/api/api.module';
import type { UpdateAlbumProfilePayload } from '@/modules/album/types.ts';

export type AlbumProfileFormProps = {
  album: AlbumRO;
  genres: LabelValueRO[];
  albumTypes: LabelValueRO[];
  isLoading?: boolean;
};

export type AlbumProfileFormEmits = {
  (e: 'submit', payload: UpdateAlbumProfilePayload): void;
};
