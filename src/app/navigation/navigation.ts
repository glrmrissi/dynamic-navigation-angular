export interface NavItem {
  id: string;
  title: string;
  type: 'item' | 'collapsable';
  icon?: string;
  url?: string;
  children?: NavItem[];
  roleNotAllowed?: string[];
}

export const navigation: NavItem[] = [
  {
    id: 'DASHBOARD',
    title: 'Dashboard',
    type: 'item',
    icon: 'dashboard',
    url: '/analytics',
    roleNotAllowed: []
  },
  {
    id: 'NOTAFISCAL',
    title: 'Nota Fiscal',
    type: 'collapsable',
    icon: 'list_alt',
    roleNotAllowed: [],
    children: [
      {
        id: 'NF_LIST',
        title: 'Listar Notas',
        type: 'item',
        url: '/nota-fiscal/list',
        roleNotAllowed: []
      },
      {
        id: 'NF_NEW',
        title: 'Nova Nota',
        type: 'item',
        url: '/nota-fiscal/new',
        roleNotAllowed: []
      }
    ]
  }
];
