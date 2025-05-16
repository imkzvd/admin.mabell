<template>
  <UIForm
    :is-loading="isLoading"
    hide-submit-button
    class="album-track-file-form"
    @submit="onSubmitForm"
  >
    <TrackUploader
      ref="trackUploaderInstance"
      :file-url="track.file"
      v-model:file-id="formState.fileId"
      v-model:duration="formState.duration"
    />

    <UIButton v-if="formState.fileId" type="submit" :is-loading="isLoading" class="mt-2">
      Upload
    </UIButton>
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { validRules } from './constants.ts';
import type {
  TrackFileFormProps,
  TrackFileFormEmits,
  TrackFileFormInstance,
  TrackFileFormState,
} from './types';

const props = defineProps<TrackFileFormProps>();
const emit = defineEmits<TrackFileFormEmits>();

const { showErrorMessage } = useNotification();

const trackUploaderInstance = ref<TrackFileFormInstance | null>(null);
const formState = reactive<TrackFileFormState>({
  fileId: '',
  duration: props.track.duration || 0,
});
const validator = useVuelidate(validRules, formState);

function onSubmitForm() {
  validator.value.$touch();

  if (validator.value.$invalid) {
    showErrorMessage(validator.value.$errors[0].$message as string);

    return;
  }

  emit('submit', formState);
}

function resetState() {
  trackUploaderInstance.value?.resetState();
}

defineExpose({
  resetState,
});
</script>

<style lang="scss" scoped></style>
