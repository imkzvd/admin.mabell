import type { AlbumRO, UpdateAlbumArtistsDTO } from '@/api/api.module';

export type AlbumArtistsFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumArtistsFormState = Required<Pick<UpdateAlbumArtistsDTO, 'artists'>>;

export type AlbumArtistsFormEmits = {
  (e: 'submit', formState: AlbumArtistsFormState): void;
};
