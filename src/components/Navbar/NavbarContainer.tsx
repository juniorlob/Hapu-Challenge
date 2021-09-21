import Navbar from './Navbar';

const NavbarContainer = (): JSX.Element => {
    const navItems = [
        { title: 'Create Your Nanny Share', link: '#' },
        { title: 'Browse Shares', link: '#' },
        { title: 'Our Story', link: '#' },
    ];
    return <Navbar navItems={navItems} />;
};

export default NavbarContainer;
