import type { AdminRO } from '@/api/api.module.ts';
import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';

export const adminTableColumns: UITableColumn[] = [
  {
    key: 'index',
    title: '#',
    width: '25px',
    align: 'center',
  },
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
    value: ({ isBlocked }: AdminRO) => !isBlocked,
  },
  {
    key: 'role',
    title: 'Role',
    width: '100px',
    align: 'center',
    value: ({ role }: AdminRO) => role.label,
  },
  {
    key: 'createdAt',
    title: 'Reg. Date',
    width: '100px',
    align: 'center',
    value: ({ createdAt }: AdminRO) => new Date(createdAt).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    title: 'Upd. Date',
    width: '100px',
    align: 'center',
    value: ({ updatedAt }: AdminRO) => new Date(updatedAt).toLocaleDateString(),
  },
];
