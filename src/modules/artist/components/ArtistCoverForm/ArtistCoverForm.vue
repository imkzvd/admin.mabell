<template>
  <UIForm class="artist-cover-form" :is-loading="isLoading" @submit="onFormSubmit">
    <div class="artist-cover-form__image-uploader-container">
      <ImageUploader
        ref="imageUploader"
        width="800px"
        height="300px"
        :preview-url="artist.cover"
        v-model="state.fileId"
      />

      <UIColorPicker ref="colorPicker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';
import type {
  ArtistCoverFormProps,
  ArtistCoverFormEmits,
} from '@/modules/artist/components/ArtistCoverForm/types.ts';
import type { UpdateArtistCoverPayload } from '@/modules/artist/types.ts';

const props = defineProps<ArtistCoverFormProps>();
const emit = defineEmits<ArtistCoverFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('imageUploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('colorPicker');

const state: UpdateArtistCoverPayload = reactive({
  fileId: null,
  color: props.artist.secondaryColor,
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
.artist-cover-form {
  &__image-uploader-container {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
}
</style>
