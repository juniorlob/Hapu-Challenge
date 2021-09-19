import { ContainerProps } from './Container.interface'
import { ContainerWrapper } from './Container.style'

export default function Container({ children }: ContainerProps): JSX.Element {
    return <ContainerWrapper>{children}</ContainerWrapper>
}
