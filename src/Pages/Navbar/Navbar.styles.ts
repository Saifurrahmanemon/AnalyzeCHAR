import styled from "styled-components";

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: ${(props) => props.theme.container};
   height: 60px;
   background-color: #fff;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   z-index: 1;
`;

export const NavLinks = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const NavLink = styled.a`
   color: ${(props) => props.theme.colors.accent};
   font-size: 1.2rem;
   text-decoration: none;
   margin-right: 20px;
   cursor: pointer;
   &:hover {
      color: gray;
      transition: all 0.3s ease-in-out;
   }
`;
