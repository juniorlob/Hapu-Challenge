import { ContainerProps } from './Container.interface';
import { ContainerWrapper } from './Container.style';

export default function Container({
    children,
    ...props
}: ContainerProps): JSX.Element {
    return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
}
