<template>
  <UIForm :is-loading="isLoading" class="track-profile-form" @submit="onFormSubmit">
    <UIInput
      name="name"
      label="Name"
      :error-messages="validator.name.$errors.map((e) => e.$message as string)"
      v-model="state.name"
      @blur="validator.name.$touch"
    />

    <UISwitch
      label="Explicit"
      notes="The track will be marked with a special icon"
      class="mb-4"
      v-model="state.isExplicit"
    />
  </UIForm>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { validRules } from '@/modules/track/components/_forms/TrackProfileForm/constants.ts';
import type {
  TrackProfileFormEmits,
  TrackProfileFormProps,
} from '@/modules/track/components/_forms/TrackProfileForm/types.ts';
import type { UpdateTrackProfilePayload } from '@/modules/track/types.ts';

const props = defineProps<TrackProfileFormProps>();
const emit = defineEmits<TrackProfileFormEmits>();

const state: UpdateTrackProfilePayload = reactive({
  name: props.track.name,
  isExplicit: props.track.isExplicit,
});

const validator = useVuelidate(validRules, state);

async function onFormSubmit() {
  validator.value.$touch();

  if (validator.value.$invalid) return;

  emit('submit', state);
}
</script>

<style lang="scss" scoped></style>
