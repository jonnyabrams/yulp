import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Yulp</h3>
          <span className="login-description">
            Connect with great local businesses
          </span>
        </div>

        <div className="login-right">
          <form className="login-box" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="login-input"
              ref={username}
            />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              ref={password}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="login-input"
              ref={passwordAgain}
            />

            <button type="submit" className="login-button">
              Sign up
            </button>
            <button
              className="login-register-button"
              onClick={() => navigate("/login")}
            >
              Already have an account?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
