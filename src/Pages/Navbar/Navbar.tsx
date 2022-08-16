import NavLogo from '../../assets/NavLogo.svg';
import { NavbarContainer, NavLink, NavLinks } from './Navbar.styles';

// will used for testing as well
export const navLinks = [
   {
      name: 'Home',
      link: '/home',
   },
   {
      name: 'How it works',
      link: '/works',
   },
   {
      name: 'About',
      link: '/about',
   },
];
function Navbar() {
   const navItems = navLinks.map((item) => (
      <NavLink key={item.name} href={item.link}>
         {item.name}
      </NavLink>
   ));
   return (
      <NavbarContainer>
         <div className='logo'>
            <img src={NavLogo} alt='navbar-logo' />
         </div>
         <NavLinks className='navlinks'>{navItems}</NavLinks>
      </NavbarContainer>
   );
}

export default Navbar;
