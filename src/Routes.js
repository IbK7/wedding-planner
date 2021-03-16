import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          //const Guard = route.guard || Fragment;
          const Component = route.component;
  
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) =>
                route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )
              }
            />
          );
        })}
      </Switch>
    </Suspense>
  );

  const routes = [
    {
      exact: true,
      path: '/login',
      component: lazy(() => import("./components/Auth/Login/Login")),
    },
    {
      exact: true,
      path: '/signup',
      component: lazy(() => import("./components/Auth/Signup/Signup"))
    },
    {
      exact: true,
      path: '/',
      component: lazy(() => import("./components/Landing/Landing"))
    },
    {
      exact: true,
      path: '/venues',
      component: lazy(() => import("./components/Venues/Venue"))
    }
  ];

  export default routes;