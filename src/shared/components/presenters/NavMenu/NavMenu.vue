<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li v-if="route.name !== 'home'" class="nav-menu__item" @click="emit('click:search')">
        Search
      </li>

      <li v-for="item of navMenuItems" :key="item.title" class="nav-menu__item">
        <RouterLink :to="item.to" class="nav-menu__link">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navMenuItems } from './constants.ts';
import type { NavMenuEmits } from '@/shared/components/presenters/NavMenu/types.ts';

const emit = defineEmits<NavMenuEmits>();

const route = useRoute();
</script>

<style scoped lang="scss">
.nav-menu {
  font-family: CircularSpBold, CircularSpCyrlBook, sans-serif;

  &__item {
    font-size: 20px;
    color: var(--secondary-color, #cccccc);
    transition: 0.25s ease-out;
    cursor: pointer;

    &:hover {
      color: var(--main-text, #ffffff);
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
