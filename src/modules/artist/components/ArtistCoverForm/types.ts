import type { ArtistRO } from '@/api/api.module';
import type { UpdateArtistCoverPayload } from '@/modules/artist/types.ts';
import type ArtistCoverForm from '@/modules/artist/components/ArtistCoverForm/ArtistCoverForm.vue';

export type ArtistCoverFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistCoverFormEmits = {
  (e: 'submit', payload: UpdateArtistCoverPayload): void;
};

export type ArtistCoverFormInstance = InstanceType<typeof ArtistCoverForm>;
