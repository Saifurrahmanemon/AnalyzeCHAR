import styled from 'styled-components';
import { device } from '../../../theme/utils';

const width = `
   width: 15rem;

   @media ${device.mobileM} {
      width: 20rem;
   }
   @media ${device.tabletS} {
      width: 30rem;
}`;
export const ItemInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 25rem;
   gap: 10px;
   background-color: ${(props) => props.theme.colors.white};
   margin-top: 20px;
   padding: 10px;
   border-radius: ${(props) => props.theme.borderRadius};
   box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px;
   ${width}
`;

export const TextContainer = styled.div`
   background-color: ${(props) => props.theme.colors.gray};
   border-radius: ${(props) => props.theme.borderRadius};
   padding: 5px ${(props) => props.theme.padding};
   height: 200px;
   opacity: 0.9;

   overflow-y: auto;
`;

export const Text = styled.p`
   font-family: 'Inter';
   font-weight: 400;
   margin: 15px;

   font-size: ${(props) => props.theme.fontSize};
   line-height: 140%;
`;

export const AnalyzeText = styled(Text)`
   margin: auto auto;
   font-size: 1rem;
   font-weight: 600;
   color: ${(props) => props.theme.colors.accent2};
`;

export const Title = styled.h1`
   font-weight: 500;
   font-size: 14px;
   margin: 0;
   color: ${(props) => props.theme.colors.black};
`;

export const CategoriesContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   overflow-x: scroll;
   ${width}
`;

export const TagContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   gap: 10px;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: left;
`;

export const Span = styled.span`
   font-size: 10px;
   margin: 10px 10px;
   padding: 5px;
   white-space: nowrap;
   border-radius: ${(props) => props.theme.borderRadius};
   color: whitesmoke;
   font-weight: 600;
   background-color: ${(props: { colors?: string }) => (props.colors ? props.colors : '')};
`;

export const SpanAdult = styled(Span)`
   color: black;
   font-size: 12px;
   margin: 0;
`;

export const StyledAdultContainer = styled(Container)`
   flex-direction: row;
   margin: 0;
`;

export const TextFileButton = styled.button`
   background-color: ${(props) => props.theme.colors.accent};
   border: none;
   color: ${(props) => props.theme.colors.white};
   padding: 8px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   letter-spacing: 1px;
   font-size: 12px;
   margin: 5px 5px;
   cursor: pointer;
   border-radius: 5px;
   border: 1px solid #bdbdbd;
   transition: all 0.2s ease-in-out;
   border-radius: ${(props) => props.theme.borderRadius};
   &:hover {
      background-color: ${(props) => props.theme.colors.accent3};
      color: ${(props) => props.theme.colors.black};
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
   }

   &:active {
      background-color: #e0e0e0;
      transform: ${(props) => props.theme.transform};
   }

   &:focus {
      outline: none;
   }
`;

export const DocFileButton = styled(TextFileButton)`
   background-color: #325499;
   border: none;
`;
