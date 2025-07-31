<template>
  <UIForm class="artist-cover-form" :is-loading="isLoading" @submit="onFormSubmit">
    <div class="artist-cover-form__image-uploader-container">
      <ImageUploader
        ref="image-uploader"
        width="800px"
        height="300px"
        :preview-url="artist.cover"
        v-model="state.fileId"
      />

      <UIColorPicker ref="color-picker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ImageUploaderInstance } from '@/shared/components/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/UI/UIColorPicker/types.ts';
import type {
  ArtistCoverFormProps,
  ArtistCoverFormEmits,
} from '@/modules/artist/components/_forms/ArtistCoverForm/types.ts';
import type { UpdateArtistCoverPayload } from '@/modules/artist/types.ts';

const props = defineProps<ArtistCoverFormProps>();
const emit = defineEmits<ArtistCoverFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('image-uploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('color-picker');

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
    margin-bottom: 32px;
  }
}
</style>
