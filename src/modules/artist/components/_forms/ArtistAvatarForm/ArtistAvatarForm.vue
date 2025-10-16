<template>
  <UIForm :is-loading="isLoading" class="artist-avatar-form" @submit="onFormSubmit">
    <div class="artist-avatar-form__image-uploader-container">
      <ImageUploader
        ref="image-uploader"
        width="300px"
        height="300px"
        is-rounded
        :preview-url="artist.avatar"
        class="artist-avatar-form__image-uploader"
        v-model="state.fileId"
      />

      <UIColorPicker ref="color-picker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ImageUploaderInstance } from '@/shared/components/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/UI/UIColorPicker/types.ts';
import type { UpdateArtistAvatarPayload } from '@/modules/artist/types.ts';
import type {
  ArtistAvatarFormProps,
  ArtistAvatarFormEmits,
} from '@/modules/artist/components/_forms/ArtistAvatarForm/types.ts';

const props = defineProps<ArtistAvatarFormProps>();
const emit = defineEmits<ArtistAvatarFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('image-uploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('color-picker');

const state: UpdateArtistAvatarPayload = reactive({
  fileId: null,
  color: props.artist.accentColor,
});

function resetState() {
  imageUploaderInstance.value?.resetState();
  colorPickerInstance.value?.resetState();
}

function onFormSubmit() {
  emit('submit', state);
}

defineExpose({
  resetState,
});
</script>

<style lang="scss" scoped>
.artist-avatar-form {
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
