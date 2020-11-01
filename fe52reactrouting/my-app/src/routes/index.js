import HomePage from "./../containers/HomeTemplate/Homepage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";
import DetailPage from "./../containers/HomeTemplate/DetailPage";
import HocPage from "./../containers/HomeTemplate/HocPage";
import Dadshboard from "./../containers/AdminTemplate/DashboardPage";
import UserPage from "./../containers/AdminTemplate/UserPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: true,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/about/list",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/Hoc",
    component: HocPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: Dadshboard,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];

export { routesHome, routesAdmin };
