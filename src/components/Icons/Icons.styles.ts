import styled from 'styled-components'
import { palette } from 'styled-tools'
import { IconProps } from './Icons.interface'

export const Icon = styled.svg<IconProps>`
    height: ${(p) => `${p.h}px` || '1em'};
    width: ${(p) => `${p.w}px` || '1em'};
    color: ${(p) => (p.color ? palette(p.color) : palette('iconColor'))};
    :hover {
        color: ${(p) =>
            p.hoverColor ? palette(p.hoverColor) : palette('iconColor')};
    }
`
