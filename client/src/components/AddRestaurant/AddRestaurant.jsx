import './add-restaurant.css'

const AddRestaurant = () => {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="element">
            <input type="text" placeholder="Name" className="text-input" />
          </div>
          <div className="element">
            <input
              type="text"
              placeholder="Location"
              className="text-input"
            />
          </div>
          <div className="element">
            <select className="dropdown">
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="element">
            <button className="button">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
