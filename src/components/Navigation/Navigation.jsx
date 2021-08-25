import {
  Нeader,
  NavList,
  NavListItem,
  NavLinkStyled,
} from "components/Navigation/Navigation.styled.js";
import { Container } from "components/Container/Container.styled.js";

function Navigation() {
  return (
    <Нeader>
      <Container>
        <NavList>
          <NavListItem>
            <NavLinkStyled exact to="/" activeStyle={{ color: "#9966cc" }}>
              Home
            </NavLinkStyled>
          </NavListItem>

          <NavListItem>
            <NavLinkStyled to="/movies" activeStyle={{ color: "#9966cc" }}>
              Movies
            </NavLinkStyled>
          </NavListItem>
        </NavList>
      </Container>
    </Нeader>
  );
}

export default Navigation;
