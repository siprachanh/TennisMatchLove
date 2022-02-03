import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { TennisMatchLove } from "./TennisMatchLove";
import { Register } from "./auth/Register";
import { InviteForm } from "./invites/InviteForm";
//import { InviteCard } from "./invites/InviteCard";
import { InviteList } from ".components/invites/InviteList"
//import { LocationList } from ".components/locations/LocationList"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <h1> Home </h1>
      </Route>

      <Route path="/invites/create">
        <InviteForm />
      </Route>
      <Route path="/invites">
        <InviteList />
      </Route>
    </>
  );
};
