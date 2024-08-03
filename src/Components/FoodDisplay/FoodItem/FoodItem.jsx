import React, { useContext, useState } from "react";
import { assets } from "../../../assets/assets";
import './FoodItem.css'
import { StoreContext } from "../../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  
  const {cartItem,AddToCart,RemoveFromCart} = useContext(StoreContext)
  return (
    <>
   <div className="food-item">
    <div className="food-item-image-container">
     <img className="food-item-img" src={image} alt="" />
{!cartItem[id] ? <img className="add" onClick={()=>AddToCart(id)} src={assets.add_icon_white} alt="" /> 
 :
   <div className="food-item-counter">
      <img onClick={()=>RemoveFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartItem[id]}</p>
      <img  onClick={()=>AddToCart(id)} src={assets.add_icon_green} alt="" />
 </div>

          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">
            {description}
          </p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
