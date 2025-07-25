<template>
  <UIForm class="album-settings-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UISwitch
      label="Public"
      notes="The album will be available to all users"
      class="mb-4"
      v-model="state.isPublic"
    />

    <UISwitch
      label="Active"
      notes="The album will be available for listening"
      class="mb-8"
      v-model="state.isActive"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';
import type {
  AlbumSettingsFormEmits,
  AlbumSettingsFormProps,
} from '@/modules/album/components/_forms/AlbumSettingsForm/types.ts';

const props = defineProps<AlbumSettingsFormProps>();
const emit = defineEmits<AlbumSettingsFormEmits>();

const state: UpdateAlbumSettingsPayload = reactive({
  isPublic: props.album.isPublic ?? false,
  isActive: props.album.isActive ?? false,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
