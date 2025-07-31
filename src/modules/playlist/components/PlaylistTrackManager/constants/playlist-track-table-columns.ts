import type { UITableColumn } from '@/shared/components/UI/UITable/types.ts';
import type { PlaylistTrackRO } from '@/api/api.module.ts';

export const playlistTrackTableColumns: UITableColumn[] = [
  {
    key: 'index',
    title: '#',
    width: '50px',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'album',
    title: 'Album',
    value: ({ track }: PlaylistTrackRO) => track?.album.name,
  },
  {
    key: 'featuredArtists',
    title: 'Feat. Artists',
    value: ({ track }: PlaylistTrackRO) => track?.featArtists.map(({ name }) => name).join(', '),
  },
  {
    key: 'isActive',
    title: 'Active',
    value: ({ track }: PlaylistTrackRO) => track?.isActive,
  },
  {
    key: 'isPublic',
    title: 'Public',
    value: ({ track }: PlaylistTrackRO) => track?.isPublic,
  },
  {
    key: 'addedDate',
    title: 'Add. Date',
    value: ({ addedAt }: PlaylistTrackRO) => new Date(addedAt).toLocaleDateString(),
  },
  {
    key: 'delete',
    title: 'Delete',
  },
];
