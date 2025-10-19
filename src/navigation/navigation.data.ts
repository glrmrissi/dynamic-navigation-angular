export type NavigationItem = {
  id: string;
  title: string;
  icon?: string;
  link?: string;
  type: 'basic' | 'collapsable' | 'group';
  children?: NavigationItem[];
  expanded?: boolean;
}

export const appNavigation: NavigationItem[] = [
  {
    id: 'staticPage',
    title: 'Static Page',
    type: 'basic',
    icon: 'home',
    link: '/static-page'
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'basic',
    icon: 'home',
    link: '/dashboard'
  },
  {
    id: 'managements',
    title: 'Gestão',
    type: 'basic',
    icon: 'manage_accounts',
    link: '/managements'
  },
  {
    id: 'cadastros',
    title: 'Cadastros',
    type: 'collapsable',
    icon: 'folder',
    children: [
      { id: 'clientes', title: 'Clientes', type: 'basic', link: '/clientes' },
      { id: 'empresas', title: 'Empresas', type: 'basic', link: '/empresas' }
    ]
  },
  {
    id: 'watchlist',
    title: 'Watchlist',
    type: 'basic',
    icon: 'visibility',
    link: '/watchlist'
  },
];
