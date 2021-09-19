import styled from 'styled-components'
import { palette, theme } from 'styled-tools'
import { MainMenuProps } from './Navbar.interface'

export const NavbarWrapper = styled.header`
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 100;
    gap: 40px;
    color: ${palette('navbarTextColor')};
    font-size: ${theme('fontSize.md')};
    font-weight: 500;

    a {
        color: ${palette('navbarTextColor')};
        text-decoration: none;
        &:hover {
            opacity: 0.7;
        }
    }
`

export const Brand = styled.div`
    background-color: ${palette('brandBg')};
    height: 64px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0px 0px 32px 32px;
    padding-bottom: 13px;
`
export const MenuButton = styled.button`
    background-color: ${palette('primary')};
    color: ${palette('white')};
    padding: 22px 12px 21px 12px;
`

export const RightItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    gap: 32px;
`

export const Nav = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:last-child {
        display: flex;
        align-items: center;
        gap: 23px;
    }
`

export const MainMenu = styled.ul<MainMenuProps>`
    list-style: none;

    display: grid;
    grid-template-columns: repeat(
        ${({ templateColumns }) => templateColumns || 1},
        auto
    );
    gap: 32px;
`
