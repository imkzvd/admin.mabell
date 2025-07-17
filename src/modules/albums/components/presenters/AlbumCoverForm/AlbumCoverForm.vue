<template>
  <UIForm class="album-cover-form" :is-loading="isLoading" @submit="onSubmitForm">
    <div class="album-cover-form__content">
      <ImageUploader
        ref="imageUploaderInstance"
        width="300px"
        height="300px"
        :preview-url="album.cover"
        v-model="formState.fileId"
      />

      <UIColorPicker ref="colorPickerInstance" width="300px" v-model="formState.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { AlbumCoverFormEmits, AlbumCoverFormProps, AlbumCoverFormState } from './types';
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';

const props = defineProps<AlbumCoverFormProps>();
const emit = defineEmits<AlbumCoverFormEmits>();

const imageUploaderInstance = ref<ImageUploaderInstance | null>(null);
const colorPickerInstance = ref<UIColorPickerInstance | null>(null);

const formState = reactive<AlbumCoverFormState>({
  fileId: null,
  color: props.album.color || null,
});

function resetState() {
  imageUploaderInstance.value?.resetState();
  colorPickerInstance.value?.resetState();
}

function onSubmitForm() {
  emit('submit', formState);
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
