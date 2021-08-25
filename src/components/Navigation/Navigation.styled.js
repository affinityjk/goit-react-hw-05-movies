import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

export const Нeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;

  z-index: 500;
  box-shadow: rgba(188, 188, 235, 0.3) 0px 4px 16px,
    rgba(188, 188, 235, 0.3) 0px 8px 24px,
    rgba(188, 188, 235, 0.3) 0px 16px 56px;
  background-color: #87cefa;
  margin-bottom: 25px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #9966cc;
  &:hover,
  &:focus {
    color: #e0ffff;
  }
`;
