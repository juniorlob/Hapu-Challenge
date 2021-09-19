import { Link } from 'react-router-dom'
import Button from '../Button'
import Container from '../Container'
import { HapuIcon } from '../Icons/HapuIcon'
import { NavbarProps, NavItems } from './Navbar.interface'
import { Brand, H5, MainMenu, Nav, NavbarWrapper } from './Navbar.style'

const NavLink = ({ children, link }: NavItems): JSX.Element => (
    <Link to={link}> {children}</Link>
)

const Navbar = ({ navItems }: NavbarProps): JSX.Element => (
    <Container>
        <NavbarWrapper>
            <NavLink link="#">
                <Brand>
                    <HapuIcon hoverColor="white" color="white" w={22} h={22} />
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
                    <Button size="lg">
                        <H5>Become a Nanny Share Host</H5>
                    </Button>
                    <H5>Sign In</H5>
                </div>
            </Nav>
        </NavbarWrapper>
    </Container>
)

export default Navbar
