<template>
  <v-form class="ui-form" @submit.prevent="emit('submit', $event)">
    <slot name="default" />

    <v-btn type="submit" :ripple="false" :loading="isLoading" color="primary mr-2">Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import type { UIFormEmits, UIFormProps } from './types';
import type { VForm } from 'vuetify/components';

defineProps<UIFormProps>();
const emit = defineEmits<UIFormEmits>();
</script>

<style scoped lang="scss"></style>
