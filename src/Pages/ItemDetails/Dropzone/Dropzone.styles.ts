import styled from "styled-components";
import { getDropzoneColorProps } from "../../../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColor = (props: getDropzoneColorProps) => {
   if (props.isDragAccept) {
      return "#00e676";
   }
   if (props.isDragReject) {
      return "#ff1744";
   }
   if (props.isFocused) {
      return "#2196f3";
   }
   return "#eeeee";
};

export const DropzoneContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   padding: 20px;
   height: 100%;
   width: 10rem;
   border-width: 2px;
   border-radius: 2px;
   border-color: ${(props: getDropzoneColorProps) => getColor(props)};
   border-style: dashed;
   background-color: #fafafa;
   color: #bdbdbd;
   outline: none;
   transition: border 0.24s ease-in-out;
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
`;
