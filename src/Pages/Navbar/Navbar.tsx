import NavLogo from "../../assets/NavLogo.svg";
import { NavbarContainer, NavLink, NavLinks } from "./Navbar.styles";
const navLinks = [
   {
      name: "Home",
      link: "/",
   },
   {
      name: "How it works",
      link: "/",
   },
   {
      name: "About",
      link: "/",
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
         <div className="logo">
            <img src={NavLogo} alt="" />
         </div>
         <NavLinks className="navlinks">{navItems}</NavLinks>
      </NavbarContainer>
   );
}

export default Navbar;
