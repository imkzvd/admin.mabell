<template>
  <UIForm class="update-artist-settings-form" :is-loading="isLoading" @submit="onFormSubmit">
    <UISwitch
      label="Public"
      notes="The artist will be available to all users"
      v-model="state.isPublic"
    />

    <UISwitch
      label="Active"
      notes="The artist will be available to all users, but his contents will be blocked"
      v-model="state.isActive"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import type { UpdateArtistSettingsPayload } from '@/modules/artist/types.ts';
import type {
  ArtistSettingsFormProps,
  ArtistSettingsFormEmits,
} from '@/modules/artist/components/ArtistSettingsForm/types.ts';

const props = defineProps<ArtistSettingsFormProps>();
const emit = defineEmits<ArtistSettingsFormEmits>();

const state: UpdateArtistSettingsPayload = reactive({
  isPublic: props.artist.isPublic ?? false,
  isActive: props.artist.isActive ?? false,
});

async function onFormSubmit() {
  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
