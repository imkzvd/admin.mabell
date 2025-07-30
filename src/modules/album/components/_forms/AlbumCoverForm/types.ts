import AlbumCoverForm from '@/modules/album/components/_forms/AlbumCoverForm/AlbumCoverForm.vue';
import type { AlbumRO } from '@/api/api.module';
import type { UpdateAlbumCoverPayload } from '@/modules/album/types.ts';

export type AlbumCoverFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumCoverFormEmits = {
  (e: 'submit', payload: UpdateAlbumCoverPayload): void;
};

export type AlbumCoverFormInstance = InstanceType<typeof AlbumCoverForm>;
