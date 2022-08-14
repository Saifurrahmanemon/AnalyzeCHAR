import styled from "styled-components";

export const ItemInfoContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 25rem;
   width: 30rem;
   gap: 10px;
   background-color: ${(props) => props.theme.colors.white};
   margin-top: 20px;
   padding: 10px;
   border-radius: ${(props) => props.theme.borderRadius};
   box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export const TextContainer = styled.div`
   background-color: ${(props) => props.theme.colors.gray2};
   border-radius: ${(props) => props.theme.borderRadius};
   padding: 5px ${(props) => props.theme.padding};
   height: 100px;
   overflow-y: auto;
`;

export const Text = styled.p`
   font-family: "Inter";
   font-style: normal;
   font-weight: 400;
   margin: 10px;
   font-size: ${(props) => props.theme.fontSize};
   line-height: 140%;
`;
