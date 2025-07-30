import type {
  UpdateTrackDTO,
  UpdateTrackFeatArtistsDTO,
  UpdateTrackFileDTO,
} from '@/api/api.module.ts';

export type UpdateTrackFeatArtistsPayload = UpdateTrackFeatArtistsDTO;

export type UpdateTrackFilePayload = UpdateTrackFileDTO;

export type UpdateTrackProfilePayload = Required<Pick<UpdateTrackDTO, 'name' | 'isExplicit'>>;

export type UpdateTrackSettingsPayload = Required<Pick<UpdateTrackDTO, 'isPublic' | 'isActive'>>;
