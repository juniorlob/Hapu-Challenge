import { ReactNode } from 'react';

type Width = { xs: number; sm: number; md: number; lg: number; xl: number };

export type ContainerPropTypes = {
    position?: 'relative';
    maxW?: Width;
};
export interface ContainerProps extends ContainerPropTypes {
    children: ReactNode;
}
