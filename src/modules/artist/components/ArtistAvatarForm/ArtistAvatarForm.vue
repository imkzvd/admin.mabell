<template>
  <UIForm :is-loading="isLoading" class="artist-avatar-form" @submit="onFormSubmit">
    <div class="artist-avatar-form__image-uploader-container">
      <ImageUploader
        ref="imageUploader"
        width="300px"
        height="300px"
        is-rounded
        :preview-url="artist.avatar"
        v-model="state.fileId"
      />

      <UIColorPicker ref="colorPicker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';
import type { UpdateArtistAvatarPayload } from '@/modules/artist/types.ts';
import type {
  ArtistAvatarFormProps,
  ArtistAvatarFormEmits,
} from '@/modules/artist/components/ArtistAvatarForm/types.ts';

const props = defineProps<ArtistAvatarFormProps>();
const emit = defineEmits<ArtistAvatarFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('imageUploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('colorPicker');

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
  }
}
</style>
