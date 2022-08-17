import styled from 'styled-components';
import { device } from '../../theme/utils';

export const ItemDetailasContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   padding: ${(props) => props.theme.container};
   margin: 1rem 3rem;
   padding-bottom: 10px;

   @media ${device.laptop} {
      margin: 1rem auto;
      max-width: 900px;
   }
   @media ${device.tabletL} {
      flex-direction: row;
   }
`;

export const FileUploadContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 300px;
   justify-content: center;
   padding-top: 10px;
   gap: 10px;
`;

export const Button = styled.button`
   background-color: ${(props) => props.theme.colors.main};
   color: ${(props) => props.theme.colors.white};
   border: none;
   border-radius: ${(props) => props.theme.borderRadius};
   padding: ${(props) => props.theme.padding};
   letter-spacing: 1.3px;
   font-weight: ${(props) => props.theme.fontWeight};
   cursor: pointer;
   outline: none;
   transition: all 0.3s ease;
   &:hover {
      background-color: ${(props) => props.theme.colors.primaryHover};
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
   }

   &:active {
      background-color: ${(props) => props.theme.colors.primaryActive};
   }

   &:disabled {
      background-color: ${(props) => props.theme.colors.gray2};
      color: ${(props) => props.theme.colors.black};
      cursor: not-allowed;
   }
`;
