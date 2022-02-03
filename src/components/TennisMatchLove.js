
import React, {useState} from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import "./TennisMatchLove.css";

export const TennisMatchLove = () => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(sessionStorage.getItem("player") !==null);
  const history = useHistory();
  const setAuthenticatedPlayer = (player, id, captain) => {
    sessionStorage.setItem("player", player);
    sessionStorage.setItem("playerId", id);
    sessionStorage.setItem("isCaptain", captain)
    setIsAuthenticated(sessionStorage.getItem("player") !==null);
  }

  const handleLogout = evt => {
    evt.preventDefault();
    sessionStorage.clear();
    setIsAuthenticated(false);
    history.push("/");

  }
const handleEdit = id => {
  history.push(`/invites/${id}/edit`);
}

return (
  <>
    <h1 className="main_home">Welcome, Tennis Match Love! </h1>

    <NavBar />
    <ApplicationViews />          
  </>
        
)}
