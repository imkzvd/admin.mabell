import AlbumCoverForm from '@/features/albums/components/presenters/AlbumCoverForm/AlbumCoverForm.vue';
import type { AlbumRO } from '@/api/api.module';
import type { UpdateAlbumCoverDTO } from '@/api/api.module.ts';

export type AlbumCoverFormProps = {
  album: AlbumRO;
  isLoading?: boolean;
};

export type AlbumCoverFormState = Required<Pick<UpdateAlbumCoverDTO, 'fileId' | 'color'>>;

export type AlbumCoverFormEmits = {
  (e: 'submit', formState: AlbumCoverFormState): void;
};

export type AlbumCoverFormInstance = InstanceType<typeof AlbumCoverForm>;
