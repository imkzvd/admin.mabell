import type { AdminRO } from '@/api/api.module.ts';
import type { UITableColumn } from '@/shared/components/presenters/UI/UITable/types.ts';

export const adminsTableColumns: UITableColumn[] = [
  {
    key: 'username',
    title: 'Username',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'isBlocked',
    title: 'Active',
    width: '50px',
    align: 'center',
    value: (item: AdminRO) => !item.isBlocked,
  },
  {
    key: 'role',
    title: 'Role',
    value: (row: AdminRO) => row.role.label,
  },
  {
    key: 'createdAt',
    title: 'Reg. Date',
    value: (row: AdminRO) => new Date(row.createdAt).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    title: 'Upd. Date',
    value: (row: AdminRO) => new Date(row.updatedAt).toLocaleDateString(),
  },
];
