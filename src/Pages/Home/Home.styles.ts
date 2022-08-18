import styled from 'styled-components';
import { device } from '../../theme/utils';
import { Button } from '../ItemDetails/ItemDetails.styles';

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   padding: 5rem ${(props) => props.theme.container};
   margin: 1rem 3rem;

   padding-bottom: 3rem;

   @media ${device.laptop} {
      margin: 1rem auto;
      max-width: 900px;
   }
   @media ${device.tabletL} {
      flex-direction: row;
   }
`;

export const Image = styled.img`
   width: 100%;
   height: auto;
   object-fit: cover;
`;

export const BannerTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   width: 100%;
   margin-bottom: 5rem;
`;

export const Title = styled.h1`
   font-size: 2rem;
   font-weight: ${(props) => props.theme.fontWeight};
   color: ${(props) => props.theme.colors.accent};
   text-align: center;
   margin-bottom: 0;
`;

export const Text = styled.p`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   font-size: 1rem;
   font-weight: ${(props) => props.theme.fontWeight};
   color: ${(props) => props.theme.colors.secondary};
   margin: 0;
   margin-top: 1rem;
   margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   gap: 10px;
   width: 100%;
   margin-bottom: 5rem;
`;

export const SourceCodeButton = styled.button`
   background-color: ${(props) => props.theme.colors.white};
   color: ${(props) => props.theme.colors.black};
   border: 1px solid ${(props) => props.theme.colors.black};
   border-radius: ${(props) => props.theme.borderRadius};
   padding: ${(props) => props.theme.padding};
   letter-spacing: 1.3px;
   font-weight: ${(props) => props.theme.fontWeight};
   cursor: pointer;
   outline: none;
   transition: all 0.3s ease;
   &:hover {
      background-color: ${(props) => props.theme.colors.black};
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
      color: white;
   }
   &:active {
      background-color: ${(props) => props.theme.colors.primaryActive};
   }
`;

export const ConvertButton = styled(Button)``;
