import { IconProps } from './Icons.interface'
import { Icon } from './Icons.styles'

export const TwitterIcon = (p: IconProps): JSX.Element => (
    <Icon {...p} viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.4101 9.05L1.58525 0.3C1.32719 0.15 1.21659 0 0.921659 0C0.516129 0 0 0.35 0 1V19C0 19.65 0.516129 20 0.921659 20C1.21659 20 1.32719 19.85 1.58525 19.7L15.4101 10.95C15.7051 10.75 16 10.55 16 10C16 9.45 15.7051 9.25 15.4101 9.05Z"
            fill="currentColor"
        />
    </Icon>
)
