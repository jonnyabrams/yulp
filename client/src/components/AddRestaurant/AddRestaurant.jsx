import { useContext, useState } from "react";

import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import "./add-restaurant.css";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price range"); // makes "Price range" default on the selector

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      });
      addRestaurants(response.data.data.restaurant)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="element">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="text-input"
            />
          </div>
          <div className="element">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Location"
              className="text-input"
            />
          </div>
          <div className="element">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="dropdown"
            >
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="element">
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
