
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
        if (localStorage.getItem("user_id")) {
          return (
            <>
                <h1 className="main_home">Welcome, Tennis Match Love! </h1>
                
              <NavBar />
              <ApplicationViews />
              <footer> Tennis Match Love 2022</footer>
            </>
          )
        } else {
          return <Redirect to="/login" />
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
)