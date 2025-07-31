import type { PlaylistRO } from '@/api/api.module';
import type { UpdatePlaylistCoverPayload } from '@/modules/playlist/types.ts';
import type PlaylistCoverForm from '@/modules/playlist/components/_forms/PlaylistCoverForm/PlaylistCoverForm.vue';

export type PlaylistCoverFormProps = {
  playlist: PlaylistRO;
  isLoading?: boolean;
};

export type PlaylistCoverFormEmits = {
  (e: 'submit', payload: UpdatePlaylistCoverPayload): void;
};

export type PlaylistCoverFormInstance = InstanceType<typeof PlaylistCoverForm>;
