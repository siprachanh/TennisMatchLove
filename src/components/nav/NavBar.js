import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/players">Players</Link>
            </li>
            <li className="navbar_link" to="/invites">Match Invites</li>
        </ul>
    )
}