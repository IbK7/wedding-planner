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
      component: lazy(() => import("./components/Categories/Venue"))
    },
    {
      exact: true,
      path: '/home',
      component: lazy(() => import("./components/Home/Home"))
    },
    {
      exact: true,
      path: '/guestlist',
      component: lazy(() => import("./components/GuestList/GuestList"))
    },
    {
      exact: true,
      path: '/budget',
      component: lazy(() => import("./components/Budget/Budget"))
    },
    {
      exact: true,
      path: '/checklist',
      component: lazy(() => import("./components/CheckList/CheckList"))
    },
    {
      exact: true,
      path: '/shortlist',
      component: lazy(() => import("./components/ShortList/ShortList"))
    },
    {
      exact: true,
      path: "/florist",
      component: lazy(() => import("./components/Categories/Florist")),
    },
    {
      exact: true,
      path: "/invites",
      component: lazy(() => import("./components/Categories/Invites")),
    },
    {
      exact: true,
      path: "/cake",
      component: lazy(() => import("./components/Categories/Cake")),
    },
    {
      exact: true,
      path: "/photography",
      component: lazy(() => import("./components/Categories/Photographer")),
    },
    {
      exact: true,
      path: "/music",
      component: lazy(() => import("./components/Categories/Music")),
    },
    {
      exact: true,
      path: "/favour",
      component: lazy(() => import("./components/Categories/Favour")),
    },
    {
      exact: true,
      path: "/jewellery",
      component: lazy(() => import("./components/Categories/Jewellery")),
    },
    {
      exact: true,
      path: "/catering",
      component: lazy(() => import("./components/Categories/Cattering")),
    },
    {
      exact: true,
      path: "/suppliers",
      component: lazy(() => import("./components/Suppliers/Supplier")),
    },
    {
      exact: true,
      path: "/planning",
      component: lazy(() => import("./components/Planner/Planning")),
    },
    {
      exact: true,
      path: "/businesslogin",
      component: lazy(() => import("./components/Business/BusinessLogin")),
    },
    {
      exact: true,
      path: "/businesssignup",
      component: lazy(() => import("./components/Business/BusinessSignup")),
    },

  ];

  export default routes;

