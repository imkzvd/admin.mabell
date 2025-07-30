<template>
  <div class="track-uploader">
    <div class="track-uploader__content">
      <UIButton
        v-if="!fileUrl"
        :is-loading="isAudioLoading"
        color="white"
        size="default"
        @click="onUploadButtonClick"
      >
        <UIIcon icon="mdi-upload" class="mr-1" />

        <span>Upload</span>
      </UIButton>

      <audio
        v-if="localFileUrl"
        :src="`${localFileUrl || fileUrl}?${Date.now()}`"
        controls
        class="track-uploader__audio"
        @loadedmetadata="onAudioMetadataLoaded"
      />

      <UIButton
        v-if="initialFileUrl !== localFileUrl"
        size="small"
        color="white"
        icon="mdi-restore"
        @click="onResetButtonClick"
      />
    </div>

    <div v-if="fileMetadata" class="track-uploader__metadata mt-8">
      <pre>{{ fileMetadata }}</pre>
    </div>

    <input ref="fileInput" type="file" hidden accept="audio/*" @change="onFileInputChange" />
  </div>
</template>

<script setup lang="ts">
import { ContentType } from '@/api/api.module';
import { apiService } from '@/shared/services/api.service.ts';
import { ApiError } from '@/shared/errors/api-error.ts';
import type {
  TrackUploaderEmits,
  TrackUploaderProps,
} from '@/modules/track/components/TrackUploader/types.ts';

const props = defineProps<TrackUploaderProps>();
const emit = defineEmits<TrackUploaderEmits>();

const [isAudioLoading, toggleAudioLoading] = useToggle();

const fileInputElement = useTemplateRef<HTMLInputElement>('fileInput');
const initialFileUrl = ref<string | null>(props.fileUrl || null);
const localFileUrl = ref<string | null>(props.fileUrl || null);
const fileMetadata = ref<object | null>(null);

function resetState() {
  if (fileInputElement.value) {
    fileInputElement.value.value = '';
  }

  initialFileUrl.value = props.fileUrl || null;
  localFileUrl.value = props.fileUrl || null;
  fileMetadata.value = null;
  emit('update:fileId', null);
  emit('update:duration', 0);
}

function onUploadButtonClick() {
  fileInputElement.value?.click();
}

async function onFileInputChange(e: Event) {
  try {
    toggleAudioLoading();

    const { files } = e.target as HTMLInputElement;

    if (!files) return;

    const [file] = files;
    const { data, ok, error } = await apiService.upload.uploadFile(
      { file },
      { type: ContentType.FormData },
    );

    if (!ok) {
      throw new ApiError(error.message, error.statusCode);
    }

    localFileUrl.value = data.path;
    fileMetadata.value = data;
    emit('update:fileId', data.id);
  } catch (e) {
    const { message } = e as Error;

    console.error(message);
  } finally {
    toggleAudioLoading();
  }
}

function onAudioMetadataLoaded(e: Event) {
  const target = e.target as HTMLAudioElement;

  emit('update:duration', Math.floor(target.duration));
}

function onResetButtonClick() {
  resetState();
}

defineExpose({
  resetState,
});
</script>

<style scoped lang="scss">
.track-uploader {
  &__content {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__audio {
    width: 50%;
  }

  &__metadata {
    font-size: 12px;
  }
}
</style>
