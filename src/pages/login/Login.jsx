import { useContext, useRef } from "react";
import "./login.css";

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import { CircularProgress } from '@mui/material';

export default function Login() {
  // useRef is used so as to prevent re rendering of the components
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault(); // To prevent the page from refreshing
    loginCall({ email: email.current.value, password: password.current.value },dispatch);
  };

  console.log(user)

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color='success' size='30px'/> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress color='success' size='30px'/> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
