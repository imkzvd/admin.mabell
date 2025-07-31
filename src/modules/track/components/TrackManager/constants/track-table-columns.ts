import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';

export const trackTableColumns: UITableColumn[] = [
  {
    key: 'index',
    title: '#',
    width: '25px',
    align: 'center',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'featArtists',
    title: 'Feat. Artists',
  },
  {
    key: 'isPublic',
    title: 'Public',
    width: '50px',
    align: 'center',
  },
  {
    key: 'isActive',
    title: 'Active',
    width: '50px',
    align: 'center',
  },
  {
    key: 'createdAt',
    title: 'Reg. Date',
    width: '100px',
    align: 'center',
    value: (row) => new Date(row.createdAt).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    title: 'Upd. Date',
    width: '100px',
    align: 'center',
    value: (row) => new Date(row.updatedAt).toLocaleDateString(),
  },
];
