import type { ArtistRO, LabelValueRO, UpdateArtistDTO } from '@/api/api.module';

export type ArtistProfileFormProps = {
  artist: ArtistRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type ArtistProfileFormState = Required<
  Pick<UpdateArtistDTO, 'name' | 'birthName' | 'birthDate' | 'genres' | 'biography'>
>;

export type ArtistProfileFormEmits = {
  (e: 'submit', formState: ArtistProfileFormState): void;
};
