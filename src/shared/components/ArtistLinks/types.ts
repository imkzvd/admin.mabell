import type { ArtistRO } from '@/api/api.module';

export type ArtistLinksProps = {
  list: ArtistRO[];
  isUnderlined?: boolean;
};
