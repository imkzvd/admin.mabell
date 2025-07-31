import type { UpdatePlaylistCoverDTO, UpdatePlaylistDTO } from '@/api/api.module.ts';

export type UpdatePlaylistProfilePayload = Required<
  Pick<UpdatePlaylistDTO, 'name' | 'genres' | 'description'>
>;

export type UpdatePlaylistCoverPayload = Required<UpdatePlaylistCoverDTO>;

export type UpdatePlaylistSettingsPayload = Required<Pick<UpdatePlaylistDTO, 'isPublic'>>;
