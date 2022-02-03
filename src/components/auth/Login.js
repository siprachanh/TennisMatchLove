import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export const Login = ({ setAuthUser, destination }) => {
  const [loginPlayer, setLoginPlayer] = useState({ email: "" });
  const [existDialog, setExistDialog] = useState(false);
  const history = useHistory();
  const handleInputChange = (e) => {
    let newPlayer = { ...loginPlayer };
    newPlayer = e.target.value;
    setLoginPlayer(newPlayer);
  };
  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/players?email=${loginPlayer}`)
      .then((res) => res.json())
      .then((player) => (player.length ? player[0] : false));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    existingUserCheck().then((exists) => {
      if (exists) {
        sessionStorage.setItem(exists.name, exists.id, exists.isCaptain);
        history.push("/invites");
      } else {
        setExistDialog(true);
      }
    });
  };
  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" open={existDialog}>
        <div>{"User does not exist"}</div>
        <button
          className="button--close"
          onClick={(e) => setExistDialog(false)}
        >
          Close
        </button>
      </dialog>
      <section className="form">
        <form className="form--login" onSubmit={handleLogin}>
          <h1 className="TennisMatchLove"> Welcome to Tennis Match Love</h1>
          <h2>{"Please sign in"}</h2>
          <section className="form--input">
            <label htmlFor="inputEmail"> Email address </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              value={loginPlayer}
              onChange={handleInputChange}
            />
          </section>
          <section className="form--input">
            <button type="submit"> Sign In</button>
          </section>
        </form>
        <section className="link--register">
          <Link className="register-link" to="/register">
            {" "}
            New Player? Click Here to Create an Account?
          </Link>
        </section>
      </section>
    </main>
  );
};
