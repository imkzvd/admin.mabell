<template>
  <UIForm :is-loading="isLoading" class="track-details-form" @submit="onFormSubmit">
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
import { validRules } from '@/modules/track/components/_forms/TrackDetailsForm/constants.ts';
import type {
  TrackDetailsFormProps,
  TrackDetailsFormEmits,
} from '@/modules/track/components/_forms/TrackDetailsForm/types.ts';
import type { UpdateTrackDetailsPayload } from '@/modules/track/types.ts';

const props = defineProps<TrackDetailsFormProps>();
const emit = defineEmits<TrackDetailsFormEmits>();

const state: UpdateTrackDetailsPayload = reactive({
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
