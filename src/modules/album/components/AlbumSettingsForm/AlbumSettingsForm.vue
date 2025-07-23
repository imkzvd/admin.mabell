<template>
  <UIForm class="album-settings-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UISwitch
      label="Public"
      notes="The album will be available to all users"
      class="mb-4"
      v-model="formState.isPublic"
    />

    <UISwitch
      label="Active"
      notes="The album will be available for listening"
      v-model="formState.isActive"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type { UpdateAlbumSettingsPayload } from '@/modules/album/types.ts';
import type {
  AlbumSettingsFormEmits,
  AlbumSettingsFormProps,
} from '@/modules/album/components/AlbumSettingsForm/types.ts';

const props = defineProps<AlbumSettingsFormProps>();
const emit = defineEmits<AlbumSettingsFormEmits>();

const formState: UpdateAlbumSettingsPayload = reactive({
  isPublic: props.album.isPublic ?? false,
  isActive: props.album.isActive ?? false,
});

async function onFormSubmit() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
