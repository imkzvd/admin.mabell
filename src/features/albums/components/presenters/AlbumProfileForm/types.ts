import type { AlbumRO, LabelValueRO, UpdateAlbumDTO } from '@/api/api.module';

export type AlbumProfileFormProps = {
  album: AlbumRO;
  genres: LabelValueRO[];
  albumTypes: LabelValueRO[];
  isLoading?: boolean;
};

export type AlbumProfileFormState = Required<
  Pick<UpdateAlbumDTO, 'name' | 'type' | 'genres' | 'releaseAt' | 'description'>
>;

export type AlbumProfileFormEmits = {
  (e: 'submit', formState: AlbumProfileFormState): void;
};
