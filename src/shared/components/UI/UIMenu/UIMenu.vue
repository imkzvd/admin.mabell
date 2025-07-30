<template>
  <v-menu :close-on-content-click="false" scrim>
    <template v-slot:activator="{ props }">
      <slot name="activator" :activator="props" />
    </template>

    <v-card min-width="240">
      <slot name="menu" />
    </v-card>
  </v-menu>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
