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
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'dashboard',
        url: '/dashboard',
    },
    {
        id: 'management',
        title: 'Management',
        type: 'collapsable',    
        children: [
            {
                id: 'users',
                title: 'Users',
                type: 'item',
                url: '/management/users',
            },
            {
                id: 'settings',
                title: 'Settings',
                type: 'item',
                url: '/management/settings',
            },
        ],
    },
]