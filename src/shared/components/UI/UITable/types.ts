import type { UIAlign } from '@/shared/components/UI/types.ts';

export type UITableColumn = {
  key: string;
  title: string;
  width?: string | number;
  align?: UIAlign;
  // eslint-disable-next-line
  value?: (row: any) => any;
};

export type UITableProps = {
  columns: UITableColumn[];
  // eslint-disable-next-line
  rows: Record<string, any>[];
  total: number;
  page?: number;
  pageSize?: number;
  isLoading?: boolean;
  hideFooter?: boolean;
  height?: string;
};

export type UITableEmits = {
  (e: 'update:page', page: number): void;
  (e: 'update:page-size', pageSize: number): void;
  // eslint-disable-next-line
  (e: 'click:row', row: Record<string, any>, index: number): void;
};
