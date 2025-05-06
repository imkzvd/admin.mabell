<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
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
</script>

<style scoped lang="scss">
.nav-menu {
  font-family: CircularSpBold, CircularSpCyrlBook, sans-serif;

  &__item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__link {
    font-size: 20px;
    color: #cccccc;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
