import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

interface ButtonProps {
    size?: 'sm' | 'md' | 'lg'
    secondary?: boolean
    type?: 'button' | 'reset' | 'submit'
    btnColor?: 'white' | 'secondary' | 'colorGrey24'
    children: ReactNode
}

export interface LinksProps extends ButtonProps {
    link?: true
    to?: LinkProps | string
}

export type BtnComponentProps = ButtonProps & LinksProps
