import { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";
import {
  DetailsSubNav,
  NavItem,
  NavLinkStyled,
} from "components/MovieDetailsNav/MovieDetailsNav.styled";

const Cast = lazy(() =>
  import("pages/Cast/Cast" /* webpackChunkName: "cast" */)
);

const Reviews = lazy(() =>
  import("pages/Reviews/Reviews" /* webpackChunkName: "reviews" */)
);

function MovieDetailsNav({ movie }) {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  return (
    <div>
      <DetailsSubNav>
        <NavItem>
          <NavLinkStyled
            to={{ pathname: `${url}/cast`, state: { from: location } }}
            activeStyle={{
              color: "#9966cc",
              borderBottom: "3px solid #87cefa",
            }}
          >
            Cast
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled
            to={{ pathname: `${url}/reviews`, state: { from: location } }}
            activeStyle={{
              color: "#9966cc",
              borderBottom: "3px solid #87cefa",
            }}
          >
            Reviews
          </NavLinkStyled>
        </NavItem>
      </DetailsSubNav>

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>{movie && <Cast movie={movie} />}</Route>
          <Route path={`${path}/reviews`}>
            {movie && <Reviews movie={movie} />}
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default MovieDetailsNav;
