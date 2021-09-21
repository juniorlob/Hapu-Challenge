import styled from 'styled-components';
import { theme } from 'styled-tools';

export const ComingSoonWrapper = styled.section`
    text-align: center;
    line-height: 28px;
    padding: ${theme('spacing.3xxl')} 0;

    @media (${theme('breakpoint.md.max')}) {
        padding: ${theme('spacing.2xl')} 0;
    }
`;
