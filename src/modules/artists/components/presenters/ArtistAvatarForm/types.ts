import type { ArtistRO, UpdateArtistImageDTO } from '@/api/api.module';
import type ArtistAvatarForm from './ArtistAvatarForm.vue';

export type ArtistAvatarFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistAvatarFormEmits = {
  (e: 'submit', formState: ArtistAvatarFormState): void;
};

export type ArtistAvatarFormState = Pick<UpdateArtistImageDTO, 'fileId' | 'color'>;

export type ArtistAvatarFormInstance = InstanceType<typeof ArtistAvatarForm>;
