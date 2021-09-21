import { ReactNode } from 'react';

export interface NavItems {
    title?: string;
    link: string;
    children?: ReactNode;
}

export interface NavbarProps {
    navItems: NavItems[];
}

export interface MainMenuProps {
    templateColumns?: number;
}
