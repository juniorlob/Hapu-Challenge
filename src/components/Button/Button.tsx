import { BtnComponentProps } from './Button.interface';
import { BtnLink, ButtonEl } from './Button.style';

const Button = ({
    link,
    to,
    children,
    ...props
}: BtnComponentProps): JSX.Element =>
    link && to ? (
        <BtnLink to={to} {...props}>
            {children}
        </BtnLink>
    ) : (
        <ButtonEl {...props}>{children}</ButtonEl>
    );

export default Button;
