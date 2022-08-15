import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RestaurantFinder from "../../apis/RestaurantFinder";
import "./update-restaurant.css";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price range");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    setUpdateSuccess(true);
  };

  return (
    <div className="update-restaurant">
      <form onSubmit={handleSubmit}>
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
            Update
          </button>
        </div>
      </form>
      {updateSuccess && <span className="success-message">Restaurant updated successfully!</span>}
    </div>
  );
};

export default UpdateRestaurant;
