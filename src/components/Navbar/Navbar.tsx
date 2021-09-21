import Button from '../Button'
import Container from '../Container'
import { HapuIcon } from '../Icons/HapuIcon'
import { NavbarProps, NavItems } from './Navbar.interface'
import {
    Brand,
    MainMenu,
    MenuLinks,
    Nav,
    NavbarWrapper,
    PositionRelative,
} from './Navbar.style'

const NavLink = ({ children, link }: NavItems): JSX.Element => (
    <MenuLinks to={link}> {children}</MenuLinks>
)

const Navbar = ({ navItems }: NavbarProps): JSX.Element => (
    <Container>
        <PositionRelative>
            <NavbarWrapper>
                <NavLink link="#">
                    <Brand>
                        <HapuIcon
                            hoverColor="white"
                            color="white"
                            w={22}
                            h={22}
                        />
                    </Brand>
                </NavLink>
                <Nav>
                    <MainMenu templateColumns={navItems.length}>
                        {navItems.map((nI, k) => (
                            <li key={k}>
                                <NavLink key={k} link={nI.link}>
                                    {nI.title}
                                </NavLink>
                            </li>
                        ))}
                    </MainMenu>
                    <div>
                        <Button size="md">Become a Nanny Share Host</Button>
                        <Button link to="#" btnColor="white">
                            Sign In
                        </Button>
                    </div>
                </Nav>
            </NavbarWrapper>
        </PositionRelative>
    </Container>
)

export default Navbar
