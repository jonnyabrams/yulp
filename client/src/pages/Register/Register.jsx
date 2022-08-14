import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain !== password) {
      setPasswordsMatch(false);
    } else {
      const user = {
        username: username,
        email: email,
        password: password,
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="login-input"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <span
              style={{
                display: passwordsMatch ? "none" : "block",
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
                marginRight: "5px",
              }}
            >
              * Passwords do not match
            </span>

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
