import styled from 'styled-components';
import { device } from '../../theme/utils';

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: ${(props) => props.theme.container};
   color: ${(props) => props.theme.colors.accent};
   text-align: center;
   margin-top: auto;
   bottom: 0;
   margin: 1rem 1rem;

   p {
      letter-spacing: 1px;
   }
   @media ${device.mobileM} {
      margin: 1rem 5rem;
   }
   @media ${device.tabletL} {
      margin: 2rem 20rem;
   }
`;
