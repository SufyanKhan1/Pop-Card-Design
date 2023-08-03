import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import PopCard from "./Component/PopCard/PopCard";
import AuthedLayout from "./layouts/authed/AuthedLayout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthedRoute path="/dashboard" component={Dashboard} />
        <AuthedRoute path="/popcards" component={PopCard} />

        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

const AuthedRoute = ({
  component: Component,
  fullLayout,
  publicRoute,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <AuthedLayout
          fullLayout={fullLayout}
          pathname={props.location.pathname}
          publicRoute={publicRoute}
        >
          <Component {...props} />
        </AuthedLayout>
      )}
    />
  );
};
