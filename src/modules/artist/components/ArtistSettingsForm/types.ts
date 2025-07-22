import type { ArtistRO } from '@/api/api.module';
import type { UpdateArtistSettingsPayload } from '@/modules/artist/types.ts';

export type ArtistSettingsFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistSettingsFormEmits = {
  (e: 'submit', payload: UpdateArtistSettingsPayload): void;
};
