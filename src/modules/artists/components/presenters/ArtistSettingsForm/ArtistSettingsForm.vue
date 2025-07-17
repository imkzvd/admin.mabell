<template>
  <UIForm class="update-artist-settings-form" :is-loading="isLoading" @submit="onSubmitForm">
    <UISwitch
      label="Public"
      notes="The artist will be available to all users"
      v-model="formState.isPublic"
    />

    <UISwitch
      label="Active"
      notes="The artist will be available to all users, but his contents will be blocked"
      v-model="formState.isActive"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type {
  ArtistSettingsFormEmits,
  ArtistSettingsFormProps,
  ArtistSettingsFormState,
} from './types.ts';

const props = defineProps<ArtistSettingsFormProps>();
const emit = defineEmits<ArtistSettingsFormEmits>();

const formState = reactive<ArtistSettingsFormState>({
  isPublic: props.artist.isPublic ?? false,
  isActive: props.artist.isActive ?? false,
});

async function onSubmitForm() {
  emit('submit', formState);
}
</script>

<style lang="scss" scoped></style>
