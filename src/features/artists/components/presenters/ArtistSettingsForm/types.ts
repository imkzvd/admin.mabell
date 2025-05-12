import type { ArtistRO, UpdateArtistDTO } from '@/api/api.module';

export type ArtistSettingsFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistSettingsFormState = Required<Pick<UpdateArtistDTO, 'isPublic' | 'isActive'>>;

export type ArtistSettingsFormEmits = {
  (e: 'submit', formState: ArtistSettingsFormState): void;
};
