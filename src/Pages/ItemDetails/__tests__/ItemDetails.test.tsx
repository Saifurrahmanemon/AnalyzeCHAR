import { render, screen } from '@testing-library/react';
import { MockThemeProvider } from '../../../theme/MockThemeProvider';
import { myTheme } from '../../../theme/theme';
import ItemDetails from '../ItemDetails';
test('should render Item Details page', () => {
   render(MockThemeProvider({ children: <ItemDetails />, theme: myTheme }));

   screen.debug();
});
