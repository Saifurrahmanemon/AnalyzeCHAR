import { FooterContainer } from './Footer.styles';

function Footer() {
   const year = new Date().getFullYear();
   return (
      <FooterContainer>
         <p>Copyright © {year}</p>
      </FooterContainer>
   );
}

export default Footer;
