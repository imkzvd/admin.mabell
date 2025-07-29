<template>
  <RouterLink :to="{ name: 'home' }" class="home-logo-link">
    <HomeLogo :width="width" :height="height" />
  </RouterLink>
</template>

<script setup lang="ts">
import type { HomeLogoLinkProps } from '@/shared/components/HomeLogoLink/types.ts';

defineProps<HomeLogoLinkProps>();
</script>

<style lang="scss" scoped></style>
