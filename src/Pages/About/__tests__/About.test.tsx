import { render, screen } from '@testing-library/react';
import { MockThemeProvider } from '../../../theme/MockThemeProvider';
import { myTheme } from '../../../theme/theme';
import About from '../About';

test('should render the about page', () => {
   render(MockThemeProvider({ children: <About />, theme: myTheme }));
   const aboutPage = screen.getByText('About');
   const aboutText = screen.getByTestId('about-text');

   expect(aboutPage).toBeInTheDocument();
   expect(aboutText).toBeInTheDocument();
});
