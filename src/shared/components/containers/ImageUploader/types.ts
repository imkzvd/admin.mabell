import type ImageUploader from './ImageUploader.vue';

export type ImageUploaderProps = {
  modelValue: string | null;
  previewUrl?: string | null;
  width?: string;
  height?: string;
  isRounded?: boolean;
};

export type ImageUploaderEmits = {
  (e: 'update:modelValue', fileId: string | null): void;
};

export type ImageUploaderInstance = InstanceType<typeof ImageUploader>;
