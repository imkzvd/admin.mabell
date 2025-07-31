import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';
import type { PlaylistRO } from '@/api/api.module.ts';

export const playlistTableColumns: UITableColumn[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'isPublic',
    title: 'Public',
    width: '50px',
    align: 'center',
  },
  {
    key: 'createdAt',
    title: 'Reg. Date',
    width: '100px',
    align: 'center',
    value: ({ createdAt }: PlaylistRO) => new Date(createdAt).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    title: 'Upd. Date',
    width: '100px',
    align: 'center',
    value: ({ updatedAt }: PlaylistRO) => new Date(updatedAt).toLocaleDateString(),
  },
];
