import type { AlbumRO } from '@/api/api.module';
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';

export type AlbumSettingsFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumSettingsFormEmits = {
  (e: 'submit', payload: UpdateAlbumSettingsPayload): void;
};
