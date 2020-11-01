import React from "react";
import { Route } from "react-router-dom";
import NavbarHome from "./../../components/navbarHome";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  //   const { exact, path, Component } = props;
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
