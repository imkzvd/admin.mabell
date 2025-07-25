import type {
  UpdateAlbumArtistsDTO,
  UpdateAlbumCoverDTO,
  UpdateAlbumDTO,
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
} from '@/api/api.module.ts';

export type UpdateAlbumArtistsPayload = UpdateAlbumArtistsDTO;

export type UpdateAlbumCoverPayload = Required<UpdateAlbumCoverDTO>;

export type UpdateAlbumProfilePayload = Required<
  Pick<UpdateAlbumDTO, 'name' | 'type' | 'genres' | 'releaseAt' | 'description'>
>;

export type UpdateAlbumSettingsPayload = Required<Pick<UpdateAlbumDTO, 'isPublic' | 'isActive'>>;

export type UpdateTrackFeatArtistsPayload = UpdateTrackFeatArtistsDTO;

export type UpdateTrackFilePayload = UpdateTrackFileDTO;

export type UpdateTrackProfilePayload = Required<Pick<UpdateTrackDTO, 'name' | 'isExplicit'>>;

export type UpdateTrackSettingsPayload = Required<Pick<UpdateTrackDTO, 'isPublic' | 'isActive'>>;
