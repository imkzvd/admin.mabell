<template>
  <v-form class="ui-form" @submit.prevent="emit('submit', $event)">
    <slot name="default" />

    <v-btn type="submit" :ripple="false" color="primary">Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import type { UIFormEmits } from './types';
import type { VForm } from 'vuetify/components';

const emit = defineEmits<UIFormEmits>();
</script>

<style scoped lang="scss"></style>
