import type { AlbumRO } from '@/api/api.module';
import type { UpdateAlbumDTO } from '@/api/api.module.ts';

export type AlbumSettingsFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumSettingsFormState = Required<Pick<UpdateAlbumDTO, 'isPublic' | 'isActive'>>;

export type AlbumSettingsFormEmits = {
  (e: 'submit', formState: AlbumSettingsFormState): void;
};
