import styled from "styled-components";

export const ItemInfoContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 20rem;
   width: 30rem;
   gap: 10px;
   margin-top: 20px;
   padding: 10px;
   border-radius: ${(props) => props.theme.borderRadius};
   box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;
