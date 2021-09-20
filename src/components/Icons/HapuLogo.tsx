import { IconProps } from './Icons.interface'
import { Icon } from './Icons.styles'

export const HapuLogo = (p: IconProps): JSX.Element => (
    <Icon {...p} viewBox="0 0 64 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.259498 0.261185C0.0864986 0.435309 0 0.648125 0 0.899637V11.4631V17.8767C0 18.1282 0.0864986 18.341 0.259498 18.5151C0.432498 18.6892 0.643939 18.7763 0.893828 18.7763C1.14372 18.7763 1.35516 18.6892 1.52816 18.5151C1.70116 18.341 1.78766 18.1282 1.78766 17.8767V11.4631C1.80688 10.7666 1.96065 10.1137 2.24899 9.50423C2.53732 8.8948 2.91215 8.3676 3.37348 7.92261C3.83481 7.47763 4.37303 7.12455 4.98814 6.86336C5.60325 6.60218 6.25679 6.47158 6.94879 6.47158C7.66001 6.47158 8.32797 6.60701 8.9527 6.87787C9.57742 7.14873 10.1252 7.52116 10.5962 7.99516C11.0671 8.46917 11.4372 9.02055 11.7063 9.64933C11.9754 10.2781 12.1099 10.9504 12.1099 11.6663V17.8767C12.1099 18.1282 12.1964 18.341 12.3694 18.5151C12.5424 18.6892 12.7539 18.7763 13.0038 18.7763C13.2536 18.7763 13.4651 18.6892 13.6381 18.5151C13.8111 18.341 13.8976 18.1282 13.8976 17.8767V11.6663C13.8976 10.6989 13.715 9.78961 13.3498 8.93833C12.9845 8.08706 12.4896 7.34704 11.8648 6.71826C11.2401 6.08948 10.5049 5.5913 9.65911 5.2237C8.81333 4.8561 7.9099 4.67231 6.94879 4.67231C5.91079 4.67231 4.9497 4.88029 4.06548 5.29625C3.18125 5.71221 2.42199 6.27811 1.78766 6.99395V0.899637C1.78766 0.648125 1.70116 0.435309 1.52816 0.261185C1.35516 0.0870608 1.14372 0 0.893828 0C0.643939 0 0.432498 0.0870608 0.259498 0.261185ZM50.977 6.5949C51.4747 6.5949 51.8781 6.18887 51.8781 5.68801C51.8781 5.18715 51.4747 4.78112 50.977 4.78112C50.4794 4.78112 50.076 5.18715 50.076 5.68801C50.076 6.18887 50.4794 6.5949 50.977 6.5949ZM63.0509 6.5949C63.5485 6.5949 63.9519 6.18887 63.9519 5.68801C63.9519 5.18715 63.5485 4.78112 63.0509 4.78112C62.5533 4.78112 62.1499 5.18715 62.1499 5.68801C62.1499 6.18887 62.5533 6.5949 63.0509 6.5949ZM23.4574 4.70126C24.38 4.70126 25.2594 4.88989 26.0956 5.26716C26.9318 5.64443 27.667 6.15228 28.3013 6.79074C28.9357 7.42919 29.4403 8.17405 29.8151 9.02532C30.1899 9.87659 30.3773 10.7859 30.3773 11.7533V17.8766C30.3773 18.1281 30.2908 18.3409 30.1178 18.515C29.9448 18.6892 29.7334 18.7762 29.4835 18.7762C29.2336 18.7762 29.0222 18.6892 28.8492 18.515C28.6762 18.3409 28.5897 18.1281 28.5897 17.8766V16.1063C27.9553 16.8222 27.1913 17.4364 26.2974 17.9491C25.4036 18.4618 24.4377 18.7182 23.3997 18.7182C22.4386 18.7182 21.54 18.5441 20.7038 18.1958C19.8676 17.8476 19.1324 17.3639 18.4981 16.7448C17.8637 16.1257 17.364 15.3905 16.9988 14.5392C16.6335 13.688 16.4509 12.7593 16.4509 11.7533C16.4509 10.7859 16.6287 9.88143 16.9843 9.03983C17.3399 8.19823 17.8301 7.46305 18.4548 6.83427C19.0795 6.20549 19.8196 5.70247 20.675 5.3252C21.5304 4.94793 22.4578 4.73995 23.4574 4.70126ZM18.2386 11.7534C18.2386 12.4693 18.3731 13.1416 18.6422 13.7703C18.9114 14.3991 19.2814 14.9505 19.7523 15.4245C20.2233 15.8985 20.7711 16.2709 21.3958 16.5418C22.0205 16.8127 22.6885 16.9481 23.3997 16.9481C24.0917 16.9481 24.7453 16.8175 25.3604 16.5563C25.9755 16.2951 26.5185 15.9324 26.9894 15.468C27.4604 15.0037 27.8352 14.4572 28.1139 13.8284C28.3927 13.1996 28.5512 12.508 28.5897 11.7534C28.5897 11.0376 28.4551 10.3604 28.186 9.72197C27.9169 9.08352 27.5469 8.5273 27.0759 8.05329C26.605 7.57929 26.0524 7.20686 25.418 6.936C24.7837 6.66514 24.1109 6.52971 23.3997 6.52971C22.6885 6.52971 22.0205 6.66514 21.3958 6.936C20.7711 7.20686 20.2233 7.57929 19.7523 8.05329C19.2814 8.5273 18.9114 9.08352 18.6422 9.72197C18.3731 10.3604 18.2386 11.0376 18.2386 11.7534ZM40.6003 18.7472C39.5238 18.7085 38.5435 18.4328 37.6593 17.9201C36.7751 17.4074 36.0158 16.8028 35.3815 16.1063V23.1003C35.3815 23.3518 35.295 23.5646 35.122 23.7387C34.949 23.9128 34.7375 23.9999 34.4877 23.9999C34.2378 23.9999 34.0263 23.9128 33.8533 23.7387C33.6803 23.5646 33.5938 23.3518 33.5938 23.1003V11.6952C33.5938 10.6891 33.7764 9.76049 34.1417 8.90921C34.5069 8.05794 35.0067 7.32276 35.641 6.70365C36.2753 6.08454 37.0106 5.60087 37.8467 5.25262C38.6829 4.90437 39.5815 4.73025 40.5426 4.73025C41.523 4.73025 42.436 4.91405 43.2818 5.28164C44.1276 5.64924 44.8628 6.15226 45.4875 6.79071C46.1122 7.42917 46.6072 8.16918 46.9724 9.01078C47.3376 9.85238 47.5202 10.7472 47.5202 11.6952C47.5202 12.6625 47.3328 13.5718 46.958 14.4231C46.5832 15.2744 46.0786 16.0192 45.4443 16.6577C44.8099 17.2962 44.0747 17.804 43.2385 18.1813C42.4024 18.5585 41.523 18.7472 40.6003 18.7472ZM35.3815 11.6954C35.4007 12.4499 35.5545 13.1464 35.8428 13.7849C36.1312 14.4233 36.506 14.9747 36.9673 15.439C37.4286 15.9034 37.9669 16.2661 38.582 16.5273C39.1971 16.7885 39.8506 16.9191 40.5426 16.9191C41.2538 16.9191 41.9266 16.7837 42.5609 16.5128C43.1953 16.2419 43.7479 15.8695 44.2189 15.3955C44.6898 14.9215 45.0598 14.3653 45.3289 13.7268C45.598 13.0884 45.7326 12.4112 45.7326 11.6954C45.7326 10.9796 45.598 10.3073 45.3289 9.67847C45.0598 9.04969 44.6898 8.4983 44.2189 8.0243C43.7479 7.55029 43.1953 7.17787 42.5609 6.90701C41.9266 6.63615 41.2538 6.50072 40.5426 6.50072C39.8314 6.50072 39.1634 6.63615 38.5387 6.90701C37.914 7.17787 37.3662 7.55029 36.8952 8.0243C36.4243 8.4983 36.0543 9.04969 35.7852 9.67847C35.516 10.3073 35.3815 10.9796 35.3815 11.6954ZM50.1024 9.17058C50.1024 8.91906 50.1889 8.70625 50.3619 8.53212C50.5349 8.358 50.7464 8.27094 50.9962 8.27094C51.2461 8.27094 51.4576 8.358 51.6306 8.53212C51.8036 8.70625 51.8901 8.91906 51.8901 9.17058V11.7534C51.8901 12.4692 52.0246 13.1416 52.2937 13.7703C52.5628 14.3991 52.9329 14.9505 53.4038 15.4245C53.8748 15.8985 54.4226 16.2709 55.0473 16.5418C55.672 16.8127 56.34 16.9481 57.0512 16.9481C57.7624 16.9481 58.4304 16.8127 59.0551 16.5418C59.6798 16.2709 60.2277 15.8985 60.6986 15.4245C61.1695 14.9505 61.5396 14.3991 61.8087 13.7703C62.0778 13.1416 62.2123 12.4692 62.2123 11.7534V9.17058C62.2123 8.91906 62.2988 8.70625 62.4718 8.53212C62.6448 8.358 62.8563 8.27094 63.1062 8.27094C63.3561 8.27094 63.5675 8.358 63.7405 8.53212C63.9135 8.70625 64 8.91906 64 9.17058V11.7534C64 12.7208 63.8174 13.6301 63.4522 14.4813C63.0869 15.3326 62.592 16.0726 61.9673 16.7014C61.3425 17.3302 60.6073 17.8284 59.7615 18.196C58.9157 18.5636 58.0123 18.7474 57.0512 18.7474C56.0901 18.7474 55.1867 18.5636 54.3409 18.196C53.4951 17.8284 52.7599 17.3302 52.1352 16.7014C51.5104 16.0726 51.0155 15.3326 50.6502 14.4813C50.285 13.6301 50.1024 12.7208 50.1024 11.7534V9.17058Z"
            fill="currentColor"
        />
    </Icon>
)
