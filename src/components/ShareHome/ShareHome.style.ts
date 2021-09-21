import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ShareHomeWrapper = styled.section`
    &:after {
        ${theme('components.Divider')}
        @media (${theme('breakpoint.lg.min')}) {
            max-width: ${theme('size.md')};
        }
        @media (${theme('breakpoint.lg.max')}) {
            max-width: ${theme('size.sm')};
        }

        @media (${theme('breakpoint.md.max')}) {
            max-width: ${theme('size.sm')};
        }
        @media (${theme('breakpoint.sm.max')}) {
            max-width: ${theme('size.xs')};
        }
        @media (${theme('breakpoint.xs.max')}) {
            max-width: ${theme('size.xxs')};
        }
    }
    > div {
        line-height: 24px;
        padding: ${theme('spacing.3xxl')} 0;

        @media (${theme('breakpoint.md.max')}) {
            padding: ${theme('spacing.2xl')} ${theme('spacing.md')};
        }
    }
`;
