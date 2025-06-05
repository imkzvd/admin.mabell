<template>
  <div class="image-uploader" :class="cssClasses" @click="onClickImageUploader">
    <UISpinner v-if="isFileLoading" :size="40" />
    <div v-else-if="localPreviewURL" class="image-uploader__preview-image-container">
      <img :src="`${localPreviewURL}?${Date.now()}`" alt="image" />
    </div>
    <div v-else class="image-uploader__label-container">
      <UIIcon icon="ph:upload" size="32px" />

      <p>Upload</p>
    </div>

    <div v-if="modelValue" class="image-uploader__reset-overlay">
      <button type="button" title="Reset to current image" @click.stop="onClickResetButton">
        <UIIcon icon="mdi-restore" size="24px" />
      </button>
    </div>

    <input ref="fileInputElement" type="file" hidden accept="image/*" @change="onChangeFileInput" />
  </div>
</template>

<script setup lang="ts">
import { ContentType } from '@/api/api.module';
import { apiService } from '@/shared/services/api.service.ts';
import { useNotification } from '@/shared/composables/useNotification.ts';
import type { ImageUploaderEmits, ImageUploaderProps } from './types';

const props = withDefaults(defineProps<ImageUploaderProps>(), {
  width: '160px',
  height: '160px',
});
const emit = defineEmits<ImageUploaderEmits>();

const { showErrorMessage } = useNotification();
const [isFileLoading, toggleFileLoading] = useToggle();

const fileInputElement = ref<HTMLInputElement | null>(null);
const initialPreviewURL = ref<string | null>(props.previewUrl || null);
const localPreviewURL = ref<string | null>(props.previewUrl || null);

const cssClasses = computed<Record<string, boolean>>(() => ({
  'image-uploader_is-rounded': props.isRounded,
}));

function resetState() {
  if (fileInputElement.value) {
    fileInputElement.value.value = '';
  }

  initialPreviewURL.value = props.previewUrl || null;
  localPreviewURL.value = props.previewUrl || null;
  emit('update:modelValue', null);
}

function onClickImageUploader() {
  fileInputElement.value?.click();
}

function onClickResetButton() {
  resetState();
}

async function onChangeFileInput(e: Event) {
  try {
    toggleFileLoading();

    const { files } = e.target as HTMLInputElement;

    if (!files || !files.length) return;

    const [file] = files;
    const { data, ok, error } = await apiService.uploads.uploadFile(
      { file },
      {
        type: ContentType.FormData,
      },
    );

    if (!ok) {
      throw new Error(error.message);
    }

    localPreviewURL.value = data.path;
    emit('update:modelValue', data.id);
  } catch (e) {
    const { message } = e as Error;

    showErrorMessage(message);
  } finally {
    toggleFileLoading();
  }
}

defineExpose({
  resetState,
});
</script>

<style scoped lang="scss">
.image-uploader {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--border-color);

  &_is-rounded {
    border-radius: 50%;
    overflow: hidden;
  }

  &:hover &__reset-overlay {
    opacity: 1;
  }

  &__preview-image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__label-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 8px;
  }

  &__reset-overlay {
    position: absolute;
    inset: 0;
    background-color: var(--overlay-color, rgb(0 0 0 / 60%));
    opacity: 0;
    transition: opacity 0.25s;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 16px;
  }
}
</style>
