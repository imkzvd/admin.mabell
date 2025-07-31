import type { ArtistRO, LabelValueRO } from '@/api/api.module';
import type { UpdateArtistDetailsPayload } from '@/modules/artist/types.ts';

export type ArtistDetailsFormProps = {
  artist: ArtistRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type ArtistDetailsFormEmits = {
  (e: 'submit', payload: UpdateArtistDetailsPayload): void;
};
