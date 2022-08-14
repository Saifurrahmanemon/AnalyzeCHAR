// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
   export interface DefaultTheme {
      borderRadius: string;
      container: string;
      padding: string;
      fontSize: string;
      fontWeight: string;
      transform: string;
      colors: {
         main: string;
         secondary: string;
         bg: string;
         accent: string;
         accent2: string;
         accent3: string;
         primary: string;
         primaryHover: string;
         primaryActive: string;
         secondaryHover: string;
         secondaryActive: string;
         white: string;
         black: string;
         gray: string;
         gray2: string;
      };
   }
}
