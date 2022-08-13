import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import Topbar from "../../components/Topbar/Topbar";
import './home.css'
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="main">
      <Topbar user={user} dispatch={dispatch} />
    </div>
  );
};

export default Home;
