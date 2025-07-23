<template>
  <UIForm class="album-cover-form" :is-loading="isLoading" @submit="onFormSubmit">
    <div class="album-cover-form__content">
      <ImageUploader
        ref="imageUploader"
        width="300px"
        height="300px"
        :preview-url="album.cover"
        v-model="state.fileId"
      />

      <UIColorPicker ref="colorPicker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { UpdateAlbumCoverPayload } from '@/modules/album/types.ts';
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';
import type {
  AlbumCoverFormEmits,
  AlbumCoverFormProps,
} from '@/modules/album/components/AlbumCoverForm/types.ts';

const props = defineProps<AlbumCoverFormProps>();
const emit = defineEmits<AlbumCoverFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('imageUploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('colorPicker');

const state: UpdateAlbumCoverPayload = reactive({
  fileId: null,
  color: props.album.color || null,
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
.album-cover-form {
  &__content {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
}
</style>
