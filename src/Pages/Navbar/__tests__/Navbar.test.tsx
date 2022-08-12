import { render, screen } from "@testing-library/react";
import Navbar, { navLinks } from "../Navbar";

test.each(navLinks)("renders %s", (link) => {
   render(<Navbar />);
   const linkDom = screen.getByText(link.name);

   expect(linkDom).toHaveAttribute("href", link.link);
});

test("renders nav logo", () => {
   render(<Navbar />);

   const navLogo = screen.getByAltText("navbar-logo");
   expect(navLogo).toBeInTheDocument();
});
