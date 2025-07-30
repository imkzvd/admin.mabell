<template>
  <v-data-table-server
    fixed-header
    fixed-footer
    density="compact"
    :headers="columns"
    :items="preparedRows"
    :items-length="total"
    :page="page"
    :items-per-page="pageSize"
    :loading="isLoading"
    :hide-default-footer="hideFooter"
    :height="height"
    disable-sort
    show-select
    class="ui-table"
    @update:page="emit('update:page', $event)"
    @update:items-per-page="emit('update:page-size', $event)"
    @click:row="onRowClick"
  >
    <template v-for="column of columns" #[`item.${column.key}`]="props">
      <slot :name="column.key" :item="props.item" :index="props.index">
        <template v-if="typeof props.value === 'boolean'">
          <UIStateIcon :value="props.value" class="mx-auto" />
        </template>
        <template v-else>{{ props.value }}</template>
      </slot>
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import type { UITableEmits, UITableProps } from '@/shared/components/UI/UITable/types.ts';

const props = defineProps<UITableProps>();
const emit = defineEmits<UITableEmits>();

const preparedRows = computed(() =>
  props.rows.map((i, index) => ({
    ...i,
    index: index + 1,
  })),
);

// eslint-disable-next-line
function onRowClick(e: MouseEvent, data: any) {
  emit('click:row', data.item, data.index);
}
</script>

<style scoped lang="scss">
.ui-table {
  :deep(td) {
    vertical-align: middle;
  }
}
</style>
