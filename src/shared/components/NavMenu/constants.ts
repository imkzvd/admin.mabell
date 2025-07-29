import type { NavMenuItem } from './types.ts';

export const navMenuItems: NavMenuItem[] = [
  { to: { name: 'login' }, title: 'Login', isPublic: true },
  { to: { name: 'authorization' }, title: 'Auth', isPublic: true },
  { to: { name: 'admins' }, title: 'Admins', isPublic: false },
  { to: { name: '' }, title: 'Charts', isPublic: true },
  { to: { name: '' }, title: 'Indexing', isPublic: true },
  { to: { name: '' }, title: 'Metric', isPublic: true },
  { to: { name: '' }, title: 'Settings', isPublic: true },
];
