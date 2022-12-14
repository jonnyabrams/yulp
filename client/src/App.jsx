import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";
import UpdatePage from "./pages/UpdatePage/UpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id/update" element={<UpdatePage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
