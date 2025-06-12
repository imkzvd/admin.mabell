import type { TrackRO, UpdateTrackFeatArtistsDTO } from '@/api/api.module';

export type TrackFeatArtistsFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackFeatArtistsFormState = Required<Pick<UpdateTrackFeatArtistsDTO, 'artists'>>;

export type TrackFeatArtistsFormEmits = {
  (e: 'submit', formState: TrackFeatArtistsFormState): void;
};
