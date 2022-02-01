import React, { useState} from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router"

export const NavBar = ( { isAuthenticated, user }) => {
    if (!isAuthenticated) {
        return (
            <> 
           <li className="navbar_item">
               </li> ?<Link className="navbar__link" to="/">Register</Link>
            : ""

             <ul className="navbar">
            <li className="navbar__item active">
                 <Link className="navbar__link" to="/">Home</Link>
                 </li>
            <li className="navbar__item active">
                 <Link className="navbar__link" to="/messages">Messages</Link>
                 </li>
            <li className="navbar__item active">
                    <Link className="navbar__link" to="/log out">Log Out</Link>
            </li>
            </ul>
            </>
        )
    } else { 

const history = useHistory();    
    return (
        <>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/players">Players</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/invites/create">Match Invites</Link>
                </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/messages">Messages</Link>
                </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/locations">Court Locations</Link>
                </li>
            <li className="navbar_item">
                <button className="navbar_button" to="#"
                 onClick={
                     () => {
                         localStorage.removeItem("user_id");
                         history.push("/login")
                     }
                 }>Logout</button>
            </li>
        </ul>
        </>
    )
}}