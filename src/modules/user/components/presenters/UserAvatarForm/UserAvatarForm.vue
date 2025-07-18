<template>
  <UIForm
    :is-loading="isLoading"
    class="user-avatar-form"
    hide-submit-button
    @submit="onSubmitForm"
  >
    <div class="user-avatar-form__content">
      <ImageUploader
        ref="imageUploaderInstance"
        width="300px"
        height="300px"
        is-rounded
        :preview-url="user.avatar"
        v-model="formState.fileId"
      />

      <UIColorPicker ref="colorPickerInstance" width="300px" v-model="formState.color" />
    </div>

    <div v-if="formState.fileId || $slots.actionButtons" class="user-avatar-form__action-buttons">
      <UIButton v-if="formState.fileId" type="submit">Upload</UIButton>

      <slot v-if="$slots.actionButtons" name="actionButtons" />
    </div>
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  UserAvatarFormEmits,
  UserAvatarFormProps,
  UserAvatarFormState,
} from '@/modules/user/components/presenters/UserAvatarForm/types.ts';
import type { ImageUploaderInstance } from '@/shared/components/containers/ImageUploader/types.ts';
import type { UIColorPickerInstance } from '@/shared/components/presenters/UI/UIColorPicker/types.ts';

const props = defineProps<UserAvatarFormProps>();
const emit = defineEmits<UserAvatarFormEmits>();

const imageUploaderInstance = ref<ImageUploaderInstance | null>(null);
const colorPickerInstance = ref<UIColorPickerInstance | null>(null);

const formState = reactive<UserAvatarFormState>({
  fileId: null,
  color: props.user.color,
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
