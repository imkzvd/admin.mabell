<template>
  <UIForm :is-loading="isLoading" class="playlist-settings-form" @submit="onFormSubmit">
    <UISwitch
      label="Public"
      notes="The playlist will be available to all users"
      class="mb-4"
      v-model="state.isPublic"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  PlaylistSettingsFormEmits,
  PlaylistSettingsFormProps,
} from '@/modules/playlist/components/_forms/PlaylistSettingsForm/types.ts';
import type { UpdatePlaylistSettingsPayload } from '@/modules/playlist/types.ts';

const props = defineProps<PlaylistSettingsFormProps>();
const emit = defineEmits<PlaylistSettingsFormEmits>();

const state: UpdatePlaylistSettingsPayload = reactive({
  isPublic: props.playlist.isPublic ?? false,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
