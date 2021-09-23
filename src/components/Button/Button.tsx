import { ComponentButtonProps } from './Button.interface';
import { BtnLink, ButtonEl } from './Button.style';

const Button = ({
    link,
    to,
    children,
    ...styleProps
}: ComponentButtonProps): JSX.Element => {
    const { btnColor, onClick, ...linkProps } = styleProps;

    return link && to && !onClick ? (
        <BtnLink color={btnColor} to={to} {...linkProps}>
            {children}
        </BtnLink>
    ) : (
        <ButtonEl {...styleProps}>{children}</ButtonEl>
    );
};
export default Button;
