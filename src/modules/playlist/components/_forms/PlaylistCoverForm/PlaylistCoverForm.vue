<template>
  <UIForm :is-loading="isLoading" class="playlist-cover-form" @submit="onFormSubmit">
    <div class="playlist-cover-form__image-uploader-container">
      <ImageUploader
        ref="imageUploader"
        width="300px"
        height="300px"
        :preview-url="playlist.cover"
        class="playlist-cover-form__image-uploader"
        v-model="state.fileId"
      />

      <UIColorPicker ref="colorPicker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  PlaylistCoverFormEmits,
  PlaylistCoverFormProps,
} from '@/modules/playlist/components/_forms/PlaylistCoverForm/types.ts';
import type { UpdatePlaylistCoverPayload } from '@/modules/playlist/types.ts';
import type { ImageUploaderInstance } from '@/shared/components/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/UI/UIColorPicker/types.ts';

const props = defineProps<PlaylistCoverFormProps>();
const emit = defineEmits<PlaylistCoverFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('imageUploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('colorPicker');

const state: UpdatePlaylistCoverPayload = reactive({
  fileId: null,
  color: props.playlist.color || null,
});

function resetState() {
  imageUploaderInstance.value?.resetState();
  colorPickerInstance.value?.resetState();
}

async function onFormSubmit() {
  emit('submit', state);
}

defineExpose({
  resetState,
});
</script>

<style lang="scss" scoped>
.playlist-cover-form {
  &__image-uploader-container {
    display: flex;
    align-items: center;
    column-gap: 32px;
    margin-bottom: 32px;
  }

  &__image-uploader {
    flex-shrink: 0;
  }
}
</style>
