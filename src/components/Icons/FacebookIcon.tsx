import { IconProps } from './Icons.interface';
import { Icon } from './Icons.styles';

export const FacebookIcon = (p: IconProps): JSX.Element => (
    <Icon {...p} viewBox="0 0 9 17" xmlns="http://www.w3.org/2000/svg">
        <title>Facebook</title>

        <path
            opacity="0.7"
            d="M8.25768 3.04704C7.79662 2.9124 7.26639 2.82264 6.78227 2.82264C6.18289 2.82264 4.89191 3.20412 4.89191 3.94465V5.71742H7.95799V8.70196H4.89191V16.9375H1.80277V8.70196H0.28125V5.71742H1.80277V4.21393C1.80277 1.94747 2.86322 0.0625 5.42213 0.0625C6.29816 0.0625 7.86578 0.10738 8.71875 0.399102L8.25768 3.04704Z"
            fill="currentColor"
        />
    </Icon>
);
