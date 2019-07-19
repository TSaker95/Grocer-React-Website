import React from "react";
import { api } from "../api";
import { setState, state } from "./AuthHandler";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const submitLogin = e => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    api
      .post("api/auth/login", { username, password }, { withCredentials: true })
      .then(res => {
        localStorage.setItem("isLoggedIn", true);
        setState({ isLoggedIn: localStorage.getItem("isLoggedIn") });
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 401) alert("Incorrect login information.");
      });
  };

  return state.isLoggedIn === "true" ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="login-form-container">
      <div className="login-form-content">
        <form className="login-form form" onSubmit={submitLogin}>
          <label htmlFor="username">
            Username
            <input
              name="username"
              ref={usernameRef}
              type="text"
              placeholder="Username"
            />
          </label>
          <input
            name="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>

        <button>Close </button>
      </div>
    </div>
  );
}
