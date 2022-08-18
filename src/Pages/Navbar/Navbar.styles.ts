import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../theme/utils';

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: ${(props) => props.theme.container};
   height: 60px;
   background-color: #fff;
   box-shadow: 0 2px 4px -2px rgba(99, 99, 99, 0.2);
   z-index: 1;
`;

export const NavLinks = styled.div`
   display: flex;
   display: none;
   flex-direction: row;
   align-items: center;
   margin-right: -24vw;
   justify-content: space-between;
   @media ${device.tabletS} {
      display: block;
   }
`;

export const NavLink = styled(Link)`
   color: ${(props) => props.theme.colors?.accent};
   font-size: 1rem;
   text-decoration: none;
   margin-right: 20px;
   font-weight: 500;
   cursor: pointer;
   &:hover {
      color: gray;
      transition: all 0.3s ease-in-out;
   }
`;

export const Hamburger = styled.img`
   content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
   @media ${device.tabletS} {
      display: none;
   }
`;

interface MobileNavLinksProps {
   isOpen: boolean;
}
export const MobileNavLinks = styled.div<MobileNavLinksProps>`
   position: absolute;
   display: ${(props) => (props.isOpen ? 'block' : 'none')};
   top: 60px;
   right: 0;
   width: 100%;
   box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
   background-color: #fff;
   ${NavLink} {
      color: ${(props) => props.theme.colors?.accent};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 10px;
      font-weight: 500;
      :hover {
         color: ${(props) => props.theme.colors?.gray2};
         transition: all 0.3s ease-in-out;
      }
   }
   @media ${device.tabletS} {
      display: none;
   }
`;

interface SignOutButton {
   signIn: boolean;
}

export const SignInOutButton = styled.button<SignOutButton>`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: flex-end;
   gap: 10px;
   background-color: ${(props) =>
      props.signIn ? props.theme.colors?.blue : props.theme.colors?.red};
   color: ${(props) => props.theme.colors?.white};
   opacity: 0.9;
   font-weight: 600;
   border: none;
   border-radius: 5px;
   padding: 8px;
   cursor: pointer;
   :hover {
      background-color: ${(props) => props.theme.colors?.gray2};
      transition: all 0.3s ease-in-out;
      color: ${(props) => props.theme.colors?.black};
   }

   :active {
      transform: ${(props) => props.theme.transform};
   }
`;
