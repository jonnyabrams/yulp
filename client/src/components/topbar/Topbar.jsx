import SearchIcon from "@mui/icons-material/Search";

import "./topbar.css";

const Topbar = () => {
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
        <button className="topbar-button">Log In</button>
      </div>
    </div>
  );
};

export default Topbar;
