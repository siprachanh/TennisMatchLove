import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = ({setAuthUser, destination}) => {
    const [loginUser,setLoginUser] = useState ({email:""});
    const [existDialog, setExistDialog] = useState(false);
    const history = useHistory()
    const handleInputChange = (e) => {
    let newUser = { ...loginUser }
    newUser = e.target.value;
    setLoginUser(newUser);
    };
    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then((res)=> res.json())
            .then((user) => (user.length ? user [0] : false))
    };
    const handleLogin =(e) => {
        e.preventDefault();
        existingUserCheck()
        .then((exists)=> {
            if (exists) {
                sessionStorage.setItem(exists.name, exists.id, exists.isCaptain)
                history.push("/");
            } else {
                setExistDialog(true);
            }
        });
    };
    return (
    <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>{"User does not exist"}</div>
                <button className="button--close" onClick={(e) => setExistDialog(false)}>Close</button>
            </dialog>
            <section className="form">
            <form className="form--login" onSubmit={handleLogin}> 
            <h1 className="TennisMatchLove"> Welcome to Tennis Match Love</h1>
            <h2>{"Please sign in"}</h2>
            <section className="form--input">
            <label htmlFor="inputEmail"> Email address </label>
            <input type="email" id="email" className="form-control" placeholder="Email address" required autoFocus value={loginUser} onChange={handleInputChange} />
           </section>
           <section className="form--input">
            <button type="submit"> Sign In</button>
            </section>
            </form>
   <section className="link--register">
       <Link className="register-link" to="/register"> Need to Create an Account?</Link >
       </section>
       </section>
       </main>
    );
};



    
   