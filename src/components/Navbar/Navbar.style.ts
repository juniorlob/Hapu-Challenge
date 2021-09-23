import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { palette, theme } from 'styled-tools';
import { MainMenuProps } from './Navbar.interface';

export const NavbarWrapper = styled.header`
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 100;
    gap: ${theme('spacing.xxl')};
    color: ${palette('navbarTextColor')};
    font-size: ${theme('fontSize.md')};
    font-weight: 500;
    @media (${theme('breakpoint.lg.max')}) {
        gap: ${theme('spacing.lg')};
    }
`;
export const MenuLinks = styled(Link)`
    color: ${palette('navbarTextColor')};
    text-decoration: none;
    transition: ${theme('transition')};
    &:hover {
        opacity: 0.7;
    }
`;

export const Brand = styled.div`
    background-color: ${palette('brandBg')};
    height: 64px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0px 0px 32px 32px;
    padding-bottom: 13px;
`;

export const Nav = styled.nav`
    width: 100%;
    padding: ${theme('spacing.md')} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: ${theme('transition')};
    & > div:last-child {
        display: flex;
        align-items: center;
        gap: ${theme('spacing.lg')};
        margin-left: auto;
        @media (${theme('breakpoint.sm.max')}) {
            & > a {
                display: none;
            }
        }
    }
    a {
        text-decoration: none;
    }
`;

export const MainMenu = styled.ul<MainMenuProps>`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(
        ${({ templateColumns }) => templateColumns || 1},
        auto
    );
    gap: ${theme('spacing.xl')};
    @media (${theme('breakpoint.lg.max')}) {
        gap: ${theme('spacing.sm')};
    }
    @media (${theme('breakpoint.md.max')}) {
        display: none;
    }
`;

export const PositionRelative = styled.div`
    position: relative;
`;
