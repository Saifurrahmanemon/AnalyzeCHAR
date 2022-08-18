import styled from 'styled-components';
import { SourceCodeButton } from '../../Home/Home.styles';
export const SignUpContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: auto auto;
   width: 100%;
   height: 60vh;
`;

export const GoogleButton = styled(SourceCodeButton)`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 10px;
`;
