import styled from "styled-components";

export const ItemInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

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
   height: 200px;
   overflow-y: auto;
`;

export const Text = styled.p`
   font-family: "Inter";
   font-weight: 400;
   margin: 10px;
   font-size: ${(props) => props.theme.fontSize};
   line-height: 140%;
`;

export const Title = styled.h1`
   font-weight: 500;
   font-size: 14px;
   margin: 0;
   color: ${(props) => props.theme.colors.black};
`;

export const CategoriesContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   overflow-x: scroll;
   width: 30rem;
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
   margin: 10px 15px;
   padding: 5px;
   white-space: nowrap;
   border-radius: ${(props) => props.theme.borderRadius};
   color: whitesmoke;
   font-weight: 600;
   background-color: ${(props: { colors?: string }) =>
      props.colors ? props.colors : ""};
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
