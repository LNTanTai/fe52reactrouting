import HomePage from "./../containers/HomeTemplate/Homepage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";
import DetailPage from "./../containers/HomeTemplate/DetailPage";

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
];

export default routesHome;
