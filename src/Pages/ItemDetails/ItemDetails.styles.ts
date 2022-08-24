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

export const ConvertedFilesWrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 5px;
   justify-content: center;
`;

export const ConvertedText = styled.span`
   font-weight: ${(props) => props.theme.fontWeight};
   color: ${(props) => props.theme.colors.accent};
`;

export const ConvertedInfoIcon = styled.span`
   margin-top: 2px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

export const TooltipText = styled.div`
   margin-top: 2px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;
export const TooltipBox = styled.div`
   position: absolute;
   bottom: calc(100% + 10px);
   left: -20px;
   visibility: hidden;
   color: transparent;
   background-color: transparent;
   width: 150px;
   margin-bottom: 10px;
   padding: 5px 5px;
   border-radius: 4px;
   transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
      padding 0.5s ease-in-out;
   &:before {
      content: '';
      width: 0;
      height: 0;
      left: 20px;
      bottom: -10px;
      position: absolute;
      border: 10px solid transparent;
      transform: rotate(-45deg);
      transition: border 0.3s ease-in-out;
   }
`;
export const TooltipCard = styled.div`
   position: relative;
   & ${TooltipText}:hover + ${TooltipBox} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      width: 250px;
      padding: 5px 5px;
      &:before {
         border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
      }
   }
`;
