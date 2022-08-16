import { render } from '@testing-library/react';
import App from './App';
import { MockThemeProvider } from './theme/MockThemeProvider';
import { myTheme } from './theme/theme';

test('renders App', () => {
   render(MockThemeProvider({ children: <App />, theme: myTheme }));
});
