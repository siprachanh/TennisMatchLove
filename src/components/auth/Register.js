import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Register = ({ setAuthenticatedUser, path = "/"}) => {
    const [registerUser, setRegisteredUser] = useState({name:"", email: ""});
    const [conflictDialog, setConflictDialog] = useState(false);

    const history = useHistory();
    const handleInputChange = (evt) => {
        const newUser = { ...registerUser};
        newUser[evt.target.id] = evt.target.value;
        setRegisteredUser(newUser);

    };

    

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then((res) => res.json())
            .then((user) => !!user.length);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: registerUser.name,
                            isCaptain: false
                        }),
                    })
                        .then((res) => res.json())
                        .then((createdUser) => {
                                if (createdUser.hasOwnProperty("id")) {
                                    localStorage.setItem("user_id", createdUser.id)
                                    // setAuthenticatedUser(createdUser.name, createdUser.id, createdUser.isCaptain);
                                    history.push(path) 
                                }
                            })
                        }
                        else {
                            conflictDialog.current.showModal()
                            //setConflictDialog(true)
                        }
                    });
                
                };
           const updateUser = (evt) => {
               const copy = {...user}
               copy[evt.target.id] = evt.target.value
           }

        }       