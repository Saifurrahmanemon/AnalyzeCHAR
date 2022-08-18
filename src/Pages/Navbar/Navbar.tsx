import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import auth from '../../firebase.init';
import {
   Hamburger,
   MobileNavLinks,
   NavbarContainer,
   NavLink,
   NavLinks,
   SignInOutButton,
} from './Navbar.styles';

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
];
function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [user] = useAuthState(auth);
   const navigate = useNavigate();

   const navItems = navLinks.map((item) => (
      <NavLink key={item.name} to={item.link}>
         {item.name}
      </NavLink>
   ));

   const handleIsOpen = () => {
      setIsOpen(!isOpen);
   };

   const toggleSignInOut = user ? (
      <SignInOutButton signIn={false} onClick={() => signOut(auth)}>
         Sign Out
      </SignInOutButton>
   ) : (
      <SignInOutButton signIn={true} onClick={() => navigate('/signup')}>
         Sign In
      </SignInOutButton>
   );

   return (
      <NavbarContainer>
         <Link to={'/'} className='logo'>
            <img src={Logo} alt='navbar-logo' />
         </Link>
         <span onClick={handleIsOpen}>
            <Hamburger />
            <MobileNavLinks isOpen={isOpen}>{navItems}</MobileNavLinks>
         </span>{' '}
         <NavLinks className='navlinks'>{navItems}</NavLinks>
         {toggleSignInOut}
      </NavbarContainer>
   );
}

export default Navbar;
