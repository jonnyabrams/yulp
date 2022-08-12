import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";
import UpdatePage from "./pages/UpdatePage/UpdatePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id/update" element={<UpdatePage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
