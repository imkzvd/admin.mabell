<template>
  <div class="home-view">
    <ViewHeader class="home-view__header">
      <div class="home-view__header-content">
        <UIChip icon="mdi-plus">Create</UIChip>

        <UIChip icon="mdi-account">Profile</UIChip>
      </div>
    </ViewHeader>

    <ViewBody class="home-view__body">
      <div class="home-view__body-content">
        <UIHeading class="mb-4 home-view__heading">Search</UIHeading>

        <GlobalSearch class="home-view__global-search" />
      </div>
    </ViewBody>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__header {
    margin-bottom: 240px;
  }

  &__header-content {
    display: flex;
    justify-content: space-between;
  }

  &__body {
    overflow: hidden;
  }

  &__body-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 800px;
    margin-inline: auto;
  }

  &__search-input {
    margin-inline: auto;
  }

  &__nav-menu {
    max-width: 200px;
    margin-inline: auto;
    width: fit-content;
  }

  &__heading {
    text-align: center;
    font-size: 40px !important;
  }

  &__global-search {
    height: 100%;
    overflow: auto;
  }
}
</style>
