import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';
import type { AlbumRO, ArtistRO } from '@/api/api.module.ts';

export const albumTableColumns: UITableColumn[] = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'type',
    title: 'Type',
    width: '100px',
    align: 'center',
    value: (item: AlbumRO) => item.type.label,
  },
  {
    key: 'artists',
    title: 'Artists',
    value: (item: AlbumRO) => item.artists.map(({ name }: ArtistRO) => name).join(', '),
  },

  {
    key: 'isActive',
    title: 'Active',
    width: '50px',
    align: 'center',
  },
  {
    key: 'isPublic',
    title: 'Public',
    width: '50px',
    align: 'center',
  },
  {
    key: 'releaseAt',
    title: 'Rel. Date',
    width: '100px',
    align: 'center',
    value: (item: AlbumRO) =>
      item.releaseAt ? new Date(item.releaseAt).toLocaleDateString() : '-',
  },
  {
    key: 'createdAt',
    title: 'Reg. Date',
    width: '100px',
    align: 'center',
    value: (item: AlbumRO) => new Date(item.createdAt).toLocaleDateString(),
  },
  {
    key: 'updatedAt',
    title: 'Upd. Date',
    width: '100px',
    align: 'center',
    value: (item: AlbumRO) => new Date(item.updatedAt).toLocaleDateString(),
  },
];
