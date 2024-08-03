import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "./FoodItem/FoodItem";
import './FoodDisplay.css'
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((v,i) => {
if(category==='All' || category===v.category){
  return <FoodItem key={i} id={v._id} name={v.name} price={v.price} description={v.description} image={v.image}/>;
}
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
