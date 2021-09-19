import { ReactNode } from 'react'

type ContainerPropTypes = {
    position?: 'relative'
}
export interface ContainerProps extends ContainerPropTypes {
    children: ReactNode
}
