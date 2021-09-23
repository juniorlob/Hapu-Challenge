import { ComponentButtonProps } from './Button.interface';
import { BtnLink, ButtonEl } from './Button.style';

const Button = ({
    link,
    to,
    children,
    ...styleProps
}: ComponentButtonProps): JSX.Element => {
    const { onClick, ...linkProps } = styleProps;

    return link && to && !onClick ? (
        <BtnLink to={to} {...linkProps}>
            {children}
        </BtnLink>
    ) : (
        <ButtonEl {...styleProps}>{children}</ButtonEl>
    );
};
export default Button;
