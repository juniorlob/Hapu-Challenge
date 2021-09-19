import { ReactNode } from 'react'

type ButtonPropTypes = {
    size?: 'sm' | 'md' | 'lg'
    secondary?: boolean
}

export interface ButtonProps extends ButtonPropTypes {
    link?: boolean
    href?: string
    children: ReactNode
}
