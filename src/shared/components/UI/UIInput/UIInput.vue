<template>
  <v-text-field
    density="comfortable"
    variant="solo-filled"
    autocomplete="off"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :label="label"
    :clearable="isClearable"
    :error-messages="errorMessages"
    :disabled="isDisabled"
    :max-width="maxWidth"
    :readonly="isReadonly"
    :autofocus="isAutofocused"
    :loading="isLoading"
    :messages="messages"
    :hide-details="hideMessageSpace"
    v-model="model"
    @change="emit('change', $event.target.value)"
    @click:clear="emit('click:clear')"
  />
</template>

<script setup lang="ts">
import type { UIInputEmits, UIInputProps } from '@/shared/components/UI/UIInput/types.ts';

defineProps<UIInputProps>();
const emit = defineEmits<UIInputEmits>();

const model = defineModel();
</script>

<style scoped lang="scss"></style>
