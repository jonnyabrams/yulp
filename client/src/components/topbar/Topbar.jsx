import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./topbar.css";

const Topbar = ({ user, dispatch, setQuery }) => {
  const navigate = useNavigate();

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">Yulp</span>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <SearchIcon className="search-icon" />
          <input
            placeholder="Search..."
            className="search-input"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="topbar-right">
        <span className="topbar-link">Write a Review</span>
        {user ? (
          <button
            className="topbar-logout-button"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Log Out
          </button>
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
