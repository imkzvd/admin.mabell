<template>
  <RouterLink :to="{ name: 'home' }" class="logo-home-link"> Admin Panel </RouterLink>
</template>

<script setup lang="ts">
import type { LogoHomeLinkProps } from './types';

withDefaults(defineProps<LogoHomeLinkProps>(), {
  size: '24px',
});
</script>

<style lang="scss" scoped>
.logo-home-link {
  font-family: 'HumongousDemo', sans-serif;
  display: inline-block;
  font-size: v-bind(size);
}
</style>
