import styled from "styled-components";

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   height: 60px;
   background-color: #fff;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
