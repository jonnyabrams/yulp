import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();

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
          <form className="login-box">
            <input placeholder="Username" className="login-input" />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
            />
            <button type="submit" className="login-button">
              Log in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="login-register-button"
            >
              Create a new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
