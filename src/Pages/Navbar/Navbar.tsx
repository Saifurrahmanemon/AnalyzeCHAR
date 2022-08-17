import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { Hamburger, MobileNavLinks, NavbarContainer, NavLink, NavLinks } from './Navbar.styles';

// will used for testing as well
export const navLinks = [
   {
      name: 'Home',
      link: '/home',
   },
   {
      name: 'Convert',
      link: '/convert',
   },
   {
      name: 'About',
      link: '/about',
   },
   {
      name: 'Sign Up',
      link: '/signup',
   },
];
function Navbar() {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const navItems = navLinks.map((item) => (
      <NavLink key={item.name} to={item.link}>
         {item.name}
      </NavLink>
   ));

   const handleIsOpen = () => {
      setIsOpen(!isOpen);
   };

   return (
      <NavbarContainer>
         <Link to={'/'} className='logo'>
            <img src={Logo} alt='navbar-logo' />
         </Link>
         <div onClick={handleIsOpen}>
            <Hamburger />
            <MobileNavLinks isOpen={isOpen}>{navItems}</MobileNavLinks>
         </div>
         <NavLinks className='navlinks'>{navItems}</NavLinks>
      </NavbarContainer>
   );
}

export default Navbar;
