import React from "react"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const TennisMatchLove = () => {
    return (
        <>
            <NavBar />
            <h1>Welcome to Tennis Match Love! </h1>
            <ApplicationViews />
        </>
    )
}

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./TennisMatchLove.css";

export const TennisMatchLove = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("tennis_player")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);