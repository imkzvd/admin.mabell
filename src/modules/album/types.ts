import type {
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
} from '@/api/api.module.ts';

export type UpdateAlbumArtistsPayload = UpdateAlbumArtistsDTO;

export type UpdateAlbumCoverPayload = Required<UpdateAlbumCoverDTO>;

export type UpdateAlbumProfilePayload = Required<
  Pick<UpdateAlbumDTO, 'name' | 'type' | 'genres' | 'releaseAt' | 'description'>
>;

export type UpdateAlbumSettingsPayload = Required<Pick<UpdateAlbumDTO, 'isPublic' | 'isActive'>>;
