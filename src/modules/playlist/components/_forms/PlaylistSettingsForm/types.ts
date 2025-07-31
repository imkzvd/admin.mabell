import type { PlaylistRO } from '@/api/api.module';
import type { UpdatePlaylistSettingsPayload } from '@/modules/playlist/types.ts';

export type PlaylistSettingsFormProps = {
  playlist: PlaylistRO;
  isLoading?: boolean;
};

export type PlaylistSettingsFormEmits = {
  (e: 'submit', payload: UpdatePlaylistSettingsPayload): void;
};
