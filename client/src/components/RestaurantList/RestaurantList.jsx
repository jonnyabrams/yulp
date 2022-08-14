import "./restaurant-list.css";

const RestaurantList = () => {
  return (
      <table className="table">
        <tbody>
          <tr>
            <th align="center" className="heading">Restaurant</th>
            <th align="center" className="heading">Location</th>
            <th align="center" className="heading">Price Range</th>
            <th align="center" className="heading">Rating</th>
          </tr>
          <tr>
            <td align="center" className="restaurant-detail">Pizza Bastard</td>
            <td align="center" className="restaurant-detail">Bristol</td>
            <td align="center" className="restaurant-detail">$$</td>
            <td align="center" className="restaurant-detail">**</td>
          </tr>
          <tr>
            <td align="center" className="restaurant-detail">Sushi Bastard</td>
            <td align="center" className="restaurant-detail">Leicester</td>
            <td align="center" className="restaurant-detail">$$$</td>
            <td align="center" className="restaurant-detail">****</td>
          </tr>
        </tbody>
      </table>
  );
};

export default RestaurantList;
