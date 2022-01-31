import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Register = ({ setAuthUser, destination = "/"}) => {
    const [registerUser, setRegisterUser] = useState({name:"", email: ""});
    const [conflictDialog, setConflictDialog] = useState(false);

    const history = useHistory();

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/players?email=${player.email}`)
            .then(res => res.json())
            .then(user => !!user.lenth)
    }
    const handleRegister = (e) => {
        e.prevent 
           
    }

}