<template>
  <UIForm class="album-settings-form" :is-loading="isLoading" @submit="onSubmitForm">
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
import type {
  AlbumSettingsFormProps,
  AlbumSettingsFormEmits,
  AlbumSettingsFormState,
} from './types';

const props = defineProps<AlbumSettingsFormProps>();
const emit = defineEmits<AlbumSettingsFormEmits>();

const formState = reactive<AlbumSettingsFormState>({
  isPublic: props.album.isPublic ?? false,
  isActive: props.album.isActive ?? false,
});

async function onSubmitForm() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
