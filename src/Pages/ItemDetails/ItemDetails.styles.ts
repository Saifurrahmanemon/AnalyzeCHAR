import styled from "styled-components";

export const ItemDetailasContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   padding: ${(props) => props.theme.container};
   margin: 1rem 3rem;
`;
