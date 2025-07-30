import type TrackManager from '@/modules/album/components/TrackManager/TrackManager.vue';

export type TrackManagerProps = {
  albumId: string;
};

export type TrackManagerInstance = InstanceType<typeof TrackManager>;
