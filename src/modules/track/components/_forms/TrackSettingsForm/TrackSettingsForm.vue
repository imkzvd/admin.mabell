<template>
  <UIForm class="track-settings-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UISwitch
      label="Active"
      :notes="
        !track.file
          ? 'To activate the track, upload the file'
          : 'The track will be available for listening'
      "
      :is-disabled="!track.file"
      v-model="state.isActive"
    />

    <UISwitch
      label="Public"
      notes="The track will be available to all users"
      v-model="state.isPublic"
      class="mb-4"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  TrackSettingsFormEmits,
  TrackSettingsFormProps,
} from '@/modules/track/components/_forms/TrackSettingsForm/types.ts';
import type { UpdateTrackSettingsPayload } from '@/modules/track/types.ts';

const props = defineProps<TrackSettingsFormProps>();
const emit = defineEmits<TrackSettingsFormEmits>();

const state: UpdateTrackSettingsPayload = reactive({
  isActive: props.track.isActive ?? false,
  isPublic: props.track.isPublic ?? false,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
