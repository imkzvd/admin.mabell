import type { TrackRO, UpdateTrackDTO } from '@/api/api.module';

export type TrackSettingsFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackSettingsFormState = Required<
  Pick<UpdateTrackDTO, 'isPublic' | 'isActive' | 'isExplicit'>
>;

export type TrackSettingsFormEmits = {
  (e: 'submit', formState: TrackSettingsFormState): void;
};
