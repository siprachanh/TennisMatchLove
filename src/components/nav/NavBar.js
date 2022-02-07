import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useHistory } from "react-router";

export const NavBar = () => {
   
        return (
            <ul className="navbar">
            <li  className="navbar__items">
                 <Link className="navbar__link" to="/Captains">
                     Captains
                 </Link>
                 </li>
            <li className="navbar__item">
                 <Link className="navbar__link" to="/Players">Players
                 Players
                 </Link>
                 </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/invites">
                    MatchInvites 
                </Link>
            </li>
            </ul>     
        );
  }