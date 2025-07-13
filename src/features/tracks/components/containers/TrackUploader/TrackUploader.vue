<template>
  <div class="track-uploader">
    <div class="track-uploader__content">
      <UIButton
        v-if="!fileUrl"
        :is-loading="isAudioLoading"
        icon="mdi-upload"
        color="white"
        size="small"
        @click="onClickUploadButton"
      />

      <audio
        v-if="localFileUrl"
        :src="`${localFileUrl || fileUrl}?${Date.now()}`"
        controls
        class="track-uploader__audio"
        @loadedmetadata="onLoadedAudioMetadata"
      />

      <UIButton
        v-if="initialFileUrl !== localFileUrl"
        size="small"
        color="white"
        icon="mdi-restore"
        @click="onClickResetButton"
      />
    </div>

    <div v-if="fileMetadata" class="track-uploader__metadata mt-8">
      <pre>{{ fileMetadata }}</pre>
    </div>

    <input ref="fileInputElement" type="file" hidden accept="audio/*" @change="onChangeFileInput" />
  </div>
</template>

<script setup lang="ts">
import { ContentType } from '@/api/api.module';
import { apiService } from '@/shared/services/api.service.ts';
import type { TrackUploaderEmits, TrackUploaderProps } from './types';

const props = defineProps<TrackUploaderProps>();
const emit = defineEmits<TrackUploaderEmits>();

const [isAudioLoading, toggleAudioLoading] = useToggle();

const fileInputElement = ref<HTMLInputElement | null>(null);
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

function onClickUploadButton() {
  fileInputElement.value?.click();
}

async function onChangeFileInput(e: Event) {
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
      throw new Error(error.message);
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

function onLoadedAudioMetadata(e: Event) {
  const target = e.target as HTMLAudioElement;

  emit('update:duration', Math.floor(target.duration));
}

function onClickResetButton() {
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
    //height: 60px;
  }

  &__metadata {
    font-size: 12px;
  }
}
</style>
