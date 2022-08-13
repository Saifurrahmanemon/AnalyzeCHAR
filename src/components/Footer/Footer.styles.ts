import styled from "styled-components";

export const FooterContainer = styled.footer`
   background-color: ${(props) => props.theme.colors.bg};
   color: ${(props) => props.theme.colors.secondary};
   text-align: center;
   margin-top: auto;
   position: fixed;
   bottom: 0;
   width: 100%;
   box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
   a {
      color: ${(props) => props.theme.colors.main};
   }
`;
