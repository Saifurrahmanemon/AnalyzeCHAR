import styled from 'styled-components';

export const FooterContainer = styled.footer`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: ${(props) => props.theme.container};
   color: ${(props) => props.theme.colors.secondary};
   text-align: center;
   margin-top: auto;
   bottom: 0;

   width: 100%;
   box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
   p {
      margin-bottom: 0;
      font-size: small;
   }
`;
