import { NavbarProps } from "../../types/types";

function Navbar({ name }: NavbarProps) {
   return (
      <div>
         <h1>Finish with setup: {name}</h1>
      </div>
   );
}

export default Navbar;
