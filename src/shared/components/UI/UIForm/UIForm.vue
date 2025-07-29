<template>
  <v-form class="ui-form" @submit.prevent="emit('submit', $event)">
    <slot name="default" />

    <UIButton v-if="!hideSubmitButton" type="submit" :loading="isLoading" color="primary">
      {{ messages?.submitButton || 'Save' }}
    </UIButton>
  </v-form>
</template>

<script setup lang="ts">
import type { UIFormEmits, UIFormProps } from './types';

defineProps<UIFormProps>();
const emit = defineEmits<UIFormEmits>();
</script>

<style scoped lang="scss"></style>
