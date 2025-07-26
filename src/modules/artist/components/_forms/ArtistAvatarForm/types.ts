import type { ArtistRO } from '@/api/api.module';
import type { UpdateArtistAvatarPayload } from '@/modules/artist/types.ts';
import type ArtistAvatarForm from '@/modules/artist/components/_forms/ArtistAvatarForm/ArtistAvatarForm.vue';

export type ArtistAvatarFormProps = {
  artist: ArtistRO;
  isLoading?: boolean;
};

export type ArtistAvatarFormEmits = {
  (e: 'submit', payload: UpdateArtistAvatarPayload): void;
};

export type ArtistAvatarFormInstance = InstanceType<typeof ArtistAvatarForm>;
