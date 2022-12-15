import { useRef } from "react";
import "./register.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault(); // To prevent the page from refreshing
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match"); // Checks whether the entered passwords match or not
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("api/auth/register", user);
        history("/login")
      } catch (error) {
        console.log(error);
      }
    }
  };

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
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
            <input
              placeholder="Email"
              className="loginInput"
              required
              type="email"
              ref={email}
            />
            <input
              placeholder="Password"
              className="loginInput"
              required
              type="password"
              minLength="6"
              ref={password}
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              type="password"
              ref={passwordAgain}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
