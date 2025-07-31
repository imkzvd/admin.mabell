import type { LabelValueRO, PlaylistRO } from '@/api/api.module';
import type { UpdatePlaylistProfilePayload } from '@/modules/playlist/types.ts';

export type PlaylistProfileFormProps = {
  playlist: PlaylistRO;
  genres: LabelValueRO[];
  isLoading?: boolean;
};

export type PlaylistProfileFormEmits = {
  (e: 'submit', payload: UpdatePlaylistProfilePayload): void;
};
