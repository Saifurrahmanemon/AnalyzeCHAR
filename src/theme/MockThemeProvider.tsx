import { MemoryRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export const MockThemeProvider = ({
   children,
   theme,
}: {
   children: React.ReactNode;
   theme: DefaultTheme;
}) => (
   <MemoryRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
   </MemoryRouter>
);
