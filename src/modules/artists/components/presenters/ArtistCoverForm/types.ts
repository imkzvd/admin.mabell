import type { ArtistRO, UpdateArtistImageDTO } from '@/api/api.module';
import type ArtistCoverForm from './ArtistCoverForm.vue';

export type ArtistCoverFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistCoverFormEmits = {
  (e: 'submit', formState: ArtistCoverFormState): void;
};

export type ArtistCoverFormState = Pick<UpdateArtistImageDTO, 'fileId' | 'color'>;

export type ArtistCoverFormInstance = InstanceType<typeof ArtistCoverForm>;
