<template>
  <div class="default-layout">
    <aside class="default-layout__aside px-4 py-8">
      <div>Top line</div>

      <div class="default-layout__middle-line">
        <NavMenu />
      </div>

      <div>Bottom line</div>
    </aside>

    <main class="default-layout__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: var(--aside-width, 300px) 1fr;
  grid-template-areas: '. main';

  &__aside {
    position: fixed;
    inset-block: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: var(--aside-width, 300px);
    background-color: var(--aside-bg-color, #000000);
    border-right: 0.5px solid var(--aside-devider-color, rgba(158, 158, 158, 20%));
  }

  &__main {
    grid-area: main;
  }
}
</style>
