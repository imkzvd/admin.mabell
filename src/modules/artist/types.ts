import type { UpdateArtistDTO, UpdateArtistImageDTO } from '@/api/api.module.ts';

export type UpdateArtistAvatarPayload = Required<UpdateArtistImageDTO>;

export type UpdateArtistCoverPayload = Required<UpdateArtistImageDTO>;

export type UpdateArtistDetailsPayload = Required<
  Pick<UpdateArtistDTO, 'name' | 'birthName' | 'birthDate' | 'genres' | 'biography'>
>;

export type UpdateArtistSettingsPayload = Required<Pick<UpdateArtistDTO, 'isPublic' | 'isActive'>>;
