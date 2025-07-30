import type { ArtistRO, LabelValueRO } from '@/api/api.module';
import type { UpdateArtistProfilePayload } from '@/modules/artist/types.ts';

export type ArtistProfileFormProps = {
  artist: ArtistRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type ArtistProfileFormEmits = {
  (e: 'submit', payload: UpdateArtistProfilePayload): void;
};
