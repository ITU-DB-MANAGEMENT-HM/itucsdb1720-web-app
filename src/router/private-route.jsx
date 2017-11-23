import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuth,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo || "/",
            state: { from: props.location }
          }}
        />
      )}
  />
);

PrivateRoute.propTypes = {};

PrivateRoute.defaultProps = {};

export default PrivateRoute;
