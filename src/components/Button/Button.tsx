import { ButtonProps } from './Button.interface'
import { Link, ButtonEl } from './Button.style'

const Button = ({ link, children, ...props }: ButtonProps): JSX.Element =>
    link ? (
        <Link {...props}>{children}</Link>
    ) : (
        <ButtonEl {...props}>{children}</ButtonEl>
    )

export default Button
