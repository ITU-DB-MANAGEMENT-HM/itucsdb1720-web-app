import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./private-route";

const Router = ({ isAuth, routes, NoMatch, noAuth, indexRoute }) => (
  <Switch>
    {[
      ...routes.map((route, key) => {
        const { path, Component, isPrivate } = route;
        return isPrivate ? (
          <PrivateRoute
            path={path}
            redirectTo={noAuth}
            component={Component}
            key={key}
            isAuth={isAuth}
          />
        ) : (
          <Route
            exact
            component={Component}
            path={path}
            key={key}
            isAuth={isAuth}
          />
        );
      }),
      <Route component={NoMatch} key={routes.length + 1} />
    ]}
  </Switch>
);

Router.propTypes = {
  isAuth: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  // NoMatch: PropTypes.element,
  noAuth: PropTypes.string,
  indexRoute: PropTypes.string
};

Router.defaultProps = {
  isAuth: false,
  routes: [],
  NoMatch: null,
  noAuth: "/",
  indexRoute: "/"
};

export default Router;
