import styled from 'styled-components'
import { palette } from 'styled-tools'
import { IconProps } from './Icons.interface'

export const Icon = styled.svg<IconProps>`
    height: ${(p) => `${p.height}px` || '1em'};
    width: ${(p) => `${p.width}px` || '1em'};
    color: ${(p) => (p.color ? palette(p.color) : palette('iconColor'))};
    :hover {
        color: ${(p) =>
            p.hoverColor ? p.hoverColor : palette('iconHoverColor')};
    }
`
