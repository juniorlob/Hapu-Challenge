import { ReactNode } from 'react'

type PropTypes = {
    size: 'sm' | 'md' | 'lg'
    secondary?: boolean
}

export interface ButtonProps extends PropTypes {
    link?: boolean
    style?: React.CSSProperties
    children: ReactNode
}
