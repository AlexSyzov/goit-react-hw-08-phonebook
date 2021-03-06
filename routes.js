import { lazy } from "react";

const routes = [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./views/HomeView")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: false,
    component: lazy(() => import("./views/RegisterView")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: false,
    component: lazy(() => import("./views/LoginView")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: false,
    component: lazy(() => import("./views/ContactsView")),
    private: true,
    restricted: false,
  },
];

export default routes;
