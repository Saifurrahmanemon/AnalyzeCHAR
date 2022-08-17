import { render, screen } from '@testing-library/react';
import { MockThemeProvider } from '../../../theme/MockThemeProvider';
import { myTheme } from '../../../theme/theme';
import Home from '../Home';

test('should render Home component', () => {
   render(MockThemeProvider({ children: <Home />, theme: myTheme }));

   const title = screen.getByText('Welcome ConvertCHAR');
   const text = screen.queryAllByTestId('home-content');
   const button = screen.getByText('Convert');
   const sourceCodeButton = screen.getByText('Source Code');
   const image = screen.getByAltText('home-banner');

   expect(title).toBeInTheDocument();
   expect(text).toHaveLength(1);
   expect(button).toBeInTheDocument();
   expect(sourceCodeButton).toBeInTheDocument();
   expect(image).toBeInTheDocument();
   screen.debug();
});
