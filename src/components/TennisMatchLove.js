
import React, {useState} from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./TennisMatchLove.css";

export const TennisMatchLove = () => {

return (
  <>
  <Route
    render={() => {
      if (localeStorage.getItem("tennis_player")) {
        return (
          <> 
          
          <h1 className="main_tennis"> Welcome to Tennis Match Love! </h1>
          <p> Let's Have Fun Playing Tennis</p>
          <NavBar />
          <ApplicationViews />   
      </>
      );
      } else{
        return <Redirect to ="/login" />;
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
}
   

    
          
  
        
