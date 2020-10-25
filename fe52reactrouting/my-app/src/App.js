import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/HomeTemplate/Homepage";
import AboutPage from "./containers/HomeTemplate/AboutPage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound/index";
import NavbarHome from "./components/navbarHome";

function App() {
  return (
    <BrowserRouter>
      <NavbarHome />
      <div>
        <Switch>
          {/*Trang Homepage - localhost:3002 */}
          <Route exact path="/" component={HomePage} />

          {/* Trang AboutPage - localhot:3002/about */}
          <Route exact path="/about" component={AboutPage} />

          {/* trangListMoviePage - localhost:3002/about/list*/}
          <Route path="/about/list" component={ListMoviePage} />

          {/* trang khong tim thay */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
