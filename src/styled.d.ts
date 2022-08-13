// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
   export interface DefaultTheme {
      borderRadius: string;

      colors: {
         main: string;
         secondary: string;
         bg: string;
         accent: string;
         accent2: string;
         accent3: string;
      };
   }
}
