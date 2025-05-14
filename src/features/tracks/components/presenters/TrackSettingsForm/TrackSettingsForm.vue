<template>
  <UIForm class="album-track-settings-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UISwitch
      label="Active"
      :notes="
        !track.file
          ? 'To activate the track, upload the file'
          : 'The track will be available for listening'
      "
      :is-disabled="!track.file"
      v-model="formState.isActive"
    />

    <UISwitch
      label="Public"
      notes="The track will be available to all users"
      v-model="formState.isPublic"
      class="mb-4"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  TrackSettingsFormProps,
  TrackSettingsFormEmits,
  TrackSettingsFormState,
} from './types';

const props = defineProps<TrackSettingsFormProps>();
const emit = defineEmits<TrackSettingsFormEmits>();

const formState = reactive<TrackSettingsFormState>({
  isActive: props.track.isActive ?? false,
  isPublic: props.track.isPublic ?? false,
  isExplicit: props.track.isExplicit ?? false,
});

async function onSubmitForm() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
