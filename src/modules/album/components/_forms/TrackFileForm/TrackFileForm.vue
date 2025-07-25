<template>
  <UIForm :is-loading="isLoading" hide-submit-button class="track-file-form" @submit="onFormSubmit">
    <TrackUploader
      ref="trackUploader"
      :file-url="track.file"
      v-model:file-id="state.fileId"
      v-model:duration="state.duration"
    />

    <UIButton v-if="state.fileId" type="submit" :is-loading="isLoading" class="mt-2">
      Upload
    </UIButton>
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { useNotification } from '@/shared/composables/useNotification.ts';
import { validRules } from '@/modules/album/components/_forms/TrackFileForm/constants.ts';
import type {
  TrackFileFormEmits,
  TrackFileFormProps,
} from '@/modules/album/components/_forms/TrackFileForm/types.ts';
import type { TrackUploaderInstance } from '@/modules/album/components/TrackUploader/types.ts';
import type { UpdateTrackFilePayload } from '@/modules/album/types.ts';

const props = defineProps<TrackFileFormProps>();
const emit = defineEmits<TrackFileFormEmits>();

const { showErrorMessage } = useNotification();

const trackUploaderInstance = useTemplateRef<TrackUploaderInstance>('trackUploader');
const state: UpdateTrackFilePayload = reactive({
  fileId: '',
  duration: props.track.duration || 0,
});
const validator = useVuelidate(validRules, state);

function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) {
    showErrorMessage(validator.value.$errors[0].$message as string);

    return;
  }

  emit('submit', state);
}

function resetState() {
  trackUploaderInstance.value?.resetState();
}

defineExpose({
  resetState,
});
</script>

<style lang="scss" scoped></style>
