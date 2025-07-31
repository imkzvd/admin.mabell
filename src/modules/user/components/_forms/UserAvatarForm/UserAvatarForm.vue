<template>
  <UIForm :is-loading="isLoading" class="user-avatar-form" @submit="onFormSubmit">
    <div class="user-avatar-form__content">
      <ImageUploader
        ref="image-uploader"
        width="300px"
        height="300px"
        is-rounded
        :preview-url="user.avatar"
        v-model="state.fileId"
      />

      <UIColorPicker ref="color-picker" width="300px" v-model="state.color" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  UserAvatarFormEmits,
  UserAvatarFormProps,
} from '@/modules/user/components/_forms/UserAvatarForm/types.ts';
import type { ImageUploaderInstance } from '@/shared/components/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/UI/UIColorPicker/types.ts';
import type { UpdateUserAvatarPayload } from '@/modules/user/types.ts';

const props = defineProps<UserAvatarFormProps>();
const emit = defineEmits<UserAvatarFormEmits>();

const imageUploaderInstance = useTemplateRef<ImageUploaderInstance>('image-uploader');
const colorPickerInstance = useTemplateRef<UIColorPickerInstance>('color-picker');

const state: UpdateUserAvatarPayload = reactive({
  fileId: null,
  color: props.user.color,
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
.user-avatar-form {
  &__content {
    display: flex;
    align-items: center;
    column-gap: 32px;
    margin-bottom: 32px;
  }

  &__action-buttons {
    display: flex;
    column-gap: 16px;
  }
}
</style>
