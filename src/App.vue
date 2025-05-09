<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useMetadataStore } from '@/features/metadata/stores/metadata.store.ts';

const metadataStore = useMetadataStore();

onMounted(() => metadataStore.fetchMetadata());
</script>

<style scoped lang="scss"></style>
