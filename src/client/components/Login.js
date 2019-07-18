import React from "react";
import { api } from "../api";

export default function Login(props) {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const submitLogin = e => {
    // Login function
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    api
      .post("api/auth/login", { username, password }, { withCredentials: true })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) props.history.push("/dashboard");
      })
      .catch(err => {
        if (err.response.status === 401) alert("Incorrect login information.");
      });
  };

  return (
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
