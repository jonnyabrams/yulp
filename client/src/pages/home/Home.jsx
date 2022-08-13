import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import Topbar from "../../components/Topbar/Topbar";
import './home.css'
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="main">
      <Topbar user={user} dispatch={dispatch} />
      <div className="welcome-message">
        {user ? `Hello, ${capitalise(user.username)}!` : 'Log in to get reviewing...'}
      </div>
    </div>
  );
};

export default Home;
