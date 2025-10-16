<template>
  <div class="version-view">
    <ViewBody>
      <UIText color="secondary">v{{ version }}</UIText>
    </ViewBody>
  </div>
</template>

<script setup lang="ts">
import { version } from '../../../package.json';
</script>

<style scoped lang="scss"></style>
