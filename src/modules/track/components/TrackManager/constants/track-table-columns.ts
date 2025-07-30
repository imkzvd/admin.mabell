import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';
import type { TrackRO } from '@/api/api.module.ts';

export const trackTableColumns: UITableColumn[] = [
  {
    key: 'index',
    title: '#',
    width: '50px',
    value: (row: TrackRO) => row.trackNumber + 1,
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'featuredArtists',
    title: 'Feat. Artists',
    value: (row: TrackRO) => row.featArtists.map(({ name }) => name).join(', '),
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
