import { FooterContainer } from './Footer.styles';

function Footer() {
   const year = new Date().getFullYear();
   return (
      <FooterContainer>
         <p>© {year} AnalyzeCHAR. All rights reserved.</p>
      </FooterContainer>
   );
}

export default Footer;
