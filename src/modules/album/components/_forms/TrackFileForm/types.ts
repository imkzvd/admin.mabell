import type { TrackRO, UpdateTrackFileDTO } from '@/api/api.module';
import type TrackFileForm from '@/modules/tracks/components/presenters/TrackFileForm/TrackFileForm.vue';

export type TrackFileFormProps = {
  track: TrackRO;
  isLoading?: boolean;
};

export type TrackFileFormState = Required<Pick<UpdateTrackFileDTO, 'fileId' | 'duration'>>;

export type TrackFileFormEmits = {
  (e: 'submit', formState: TrackFileFormState): void;
};

export type TrackFileFormInstance = InstanceType<typeof TrackFileForm>;
