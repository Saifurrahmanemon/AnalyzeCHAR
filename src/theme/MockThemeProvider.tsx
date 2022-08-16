import { DefaultTheme, ThemeProvider } from 'styled-components';

export const MockThemeProvider = ({
   children,
   theme,
}: {
   children: React.ReactNode;
   theme: DefaultTheme;
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
