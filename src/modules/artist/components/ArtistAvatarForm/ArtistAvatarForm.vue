<template>
  <UIForm :is-loading="isLoading" class="artist-avatar-form" @submit="onSubmitForm">
    <div class="artist-avatar-form__content">
      <ImageUploader
        ref="imageUploaderInstance"
        width="300px"
        height="300px"
        is-rounded
        :preview-url="artist.avatar"
        v-model="formState.fileId"
      />

      <UIColorPicker ref="colorPickerInstance" width="300px" v-model="formState.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type { ArtistAvatarFormProps, ArtistAvatarFormEmits, ArtistAvatarFormState } from './types';
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';

const props = defineProps<ArtistAvatarFormProps>();
const emit = defineEmits<ArtistAvatarFormEmits>();

const imageUploaderInstance = ref<ImageUploaderInstance | null>(null);
const colorPickerInstance = ref<UIColorPickerInstance | null>(null);

const formState = reactive<ArtistAvatarFormState>({
  fileId: null,
  color: props.artist.accentColor,
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
.artist-avatar-form {
  &__content {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }
}
</style>
