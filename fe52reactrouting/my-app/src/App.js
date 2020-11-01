import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/HomeTemplate/Homepage";
import AboutPage from "./containers/HomeTemplate/AboutPage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound/index";
import NavbarHome from "./components/navbarHome";
import { routesHome, routesAdmin } from "./routes";
import NavbarAdmin from "./components/NavbarAdmin/index";

import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/AuthPage";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          // <Route
          //   key={index}
          //   exact={item.exact}
          //   path={item.path}
          //   component={item.component}
          // />
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      {/* <NavbarHome /> */}
      {/* <NavbarAdmin /> */}
      <div>
        <Switch>
          {/*Trang Homepage - localhost:3002 */}
          {/* <Route exact path="/" component={HomePage} /> */}

          {/* Trang AboutPage - localhot:3002/about */}
          {/* <Route exact path="/about" component={AboutPage} /> */}

          {/* trangListMoviePage - localhost:3002/about/list*/}
          {/* <Route path="/about/list" component={ListMoviePage} /> */}

          {showLayoutHome(routesHome)}
          {showLayoutAdmin(routesAdmin)}
          {/* trang khong tim thay */}
          <Route path="/auth" component={AuthPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
