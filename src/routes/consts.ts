import { AuthLayoutRoutes, MainLayoutRoutes } from "./routeTypes";

import AuthLayout from "../layouts/AuthLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import Register from "../Pages/Register/RegisterForm";

export const HOME_PATH = "/";

export const LOGIN_PATH = "/";
export const REGISTER_PATH ="/register";


export const mainLayoutRoutes:MainLayoutRoutes = {
    Layout: MainLayout,
    routes:[
        {path: HOME_PATH, Component: Home},
    ]
};

export const authLayoutRoutes:AuthLayoutRoutes = {
    Layout: AuthLayout,
    routes: [
        {path: LOGIN_PATH, Component: Login},
        {path: REGISTER_PATH, Component: Register},
    ]
}