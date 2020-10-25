import HomePage from "./../containers/HomeTemplate/Homepage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/about/list",
    component: ListMoviePage,
  },
];

export default routesHome;
