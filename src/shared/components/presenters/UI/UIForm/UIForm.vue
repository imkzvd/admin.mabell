<template>
  <v-form class="ui-form" @submit.prevent="emit('submit', $event)">
    <slot name="default" />

    <v-btn type="submit" :ripple="false" :loading="isLoading" color="primary mt-8">
      {{ messages?.submitButton || 'Save' }}
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import type { UIFormEmits, UIFormProps } from './types';

defineProps<UIFormProps>();
const emit = defineEmits<UIFormEmits>();
</script>

<style scoped lang="scss"></style>
