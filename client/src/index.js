import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./context/Auth/AuthContext";
import { RestaurantsContextProvider } from "./context/Restaurants/RestaurantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RestaurantsContextProvider>
        <App />
      </RestaurantsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
