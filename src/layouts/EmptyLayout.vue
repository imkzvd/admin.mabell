<template>
  <div class="empty-layout">
    <main class="empty-layout__main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.empty-layout {
  //position: relative;
  min-height: 100vh;
  background: url('@/assets/images/desktop-layout-bg.png') no-repeat;
  background-size: cover;

  &::before {
    position: absolute;
    inset: 0;
    content: '';
    background: var(--overlay-color);
    backdrop-filter: blur(40px) saturate(500%);
  }

  &__main {
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }
}
</style>
