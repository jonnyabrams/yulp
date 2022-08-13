import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./topbar.css";
import { AuthContext } from "../../context/Auth/AuthContext";

const Topbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Yulp</span>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <SearchIcon className="search-icon" />
          <input placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="topbar-right">
        <span className="topbar-link">Write a Review</span>
        {user ? (
          <button className="topbar-logout-button" onClick={() => dispatch({ type: "LOGOUT" })}>Log Out</button>
        ) : (
          <button
            className="topbar-login-button"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
