import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

import "./login.css";
import { AuthContext } from "../../context/Auth/AuthContext";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const user = {
        username: username.current.value,
        password: password.current.value,
      };
      const res = await axios.post("/auth/login", user);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Yulp</h3>
          <span className="login-description">
            We're all restaurant critics now
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
              placeholder="Password"
              type="password"
              className="login-input"
              ref={password}
            />
            <button
              type="submit"
              className="login-button"
              disabled={isFetching}
            >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <button
              onClick={() => navigate("/register")}
              className="login-register-button"
            >
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
