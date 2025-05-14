import type TrackUploader from '@/features/tracks/components/containers/TrackUploader/TrackUploader.vue';

export type TrackUploaderProps = {
  fileId: string | null;
  duration: number | null;
  fileUrl?: string | null;
};

export type TrackUploaderEmits = {
  (e: 'update:fileId', value: string | null): void;
  (e: 'update:duration', value: number | null): void;
};

export type TrackUploaderInstance = InstanceType<typeof TrackUploader>;
