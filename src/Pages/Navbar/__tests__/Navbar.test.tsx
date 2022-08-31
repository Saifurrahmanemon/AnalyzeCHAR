import { render, screen } from '@testing-library/react';
import { MockThemeProvider } from '../../../theme/MockThemeProvider';
import { myTheme } from '../../../theme/theme';
import Navbar, { navLinks } from '../Navbar';

test.each(navLinks)('renders %s', (link) => {
   render(MockThemeProvider({ children: <Navbar />, theme: myTheme }));

   const linkDom = screen.getAllByText(link.name);

   expect(linkDom).toHaveLength(2);

   linkDom.forEach((dom) => {
      expect(dom.getAttribute('href')).toEqual(link.link);
   });
   screen.debug();
});

test('renders nav logo', () => {
   render(MockThemeProvider({ children: <Navbar />, theme: myTheme }));

   const navLogo = screen.getByAltText('navbar-logo');
   expect(navLogo).toBeInTheDocument();
});
