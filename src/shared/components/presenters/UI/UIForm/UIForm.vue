<template>
  <v-form ref="formInstance" class="ui-form" @submit.prevent="emit('submit', $event)">
    <slot name="default" />

    <v-btn type="submit" :ripple="false" color="primary" class="mr-2">Submit</v-btn>

    <v-btn :ripple="false" color="error" @click="onResetButtonClick">Reset</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import type { UIFormEmits } from './types';
import type { VForm } from 'vuetify/components';

const emit = defineEmits<UIFormEmits>();

const form = ref<VForm | null>(null);

function onResetButtonClick() {
  form.value?.reset();
  emit('reset');
}
</script>

<style scoped lang="scss"></style>
