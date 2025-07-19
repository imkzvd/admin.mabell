<template>
  <UIForm class="artist-cover-form" :is-loading="isLoading" @submit="onSubmitForm">
    <div class="artist-cover-form__content">
      <ImageUploader
        ref="imageUploaderInstance"
        width="800px"
        height="300px"
        :preview-url="artist.cover"
        v-model="formState.fileId"
      />

      <UIColorPicker ref="colorPickerInstance" width="300px" v-model="formState.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ArtistCoverFormProps, ArtistCoverFormEmits, ArtistCoverFormState } from './types';
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';

const props = defineProps<ArtistCoverFormProps>();
const emit = defineEmits<ArtistCoverFormEmits>();

const imageUploaderInstance = ref<ImageUploaderInstance | null>(null);
const colorPickerInstance = ref<UIColorPickerInstance | null>(null);

const formState = reactive<ArtistCoverFormState>({
  fileId: null,
  color: props.artist.secondaryColor,
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
.artist-cover-form {
  &__content {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
}
</style>
