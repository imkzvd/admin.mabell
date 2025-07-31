import type { NavMenuItem } from './types.ts';

export const navMenuItems: NavMenuItem[] = [
  { to: { name: 'mabell' }, title: 'Mabell' },
  { to: { name: 'admins' }, title: 'Admins' },
  { to: { name: '' }, title: 'Charts', isPublic: true },
  { to: { name: '' }, title: 'Indexing', isPublic: true },
  { to: { name: '' }, title: 'Metric', isPublic: true },
  { to: { name: '' }, title: 'Settings', isPublic: true },
];
