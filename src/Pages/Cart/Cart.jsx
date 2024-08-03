import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { food_list, cartItem, RemoveFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <>
      <div className="cart" id="Cart-Page">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />

          {food_list.map((v, index) => {
            if (cartItem[v._id] > 0) {
              return (
                <>
                  <div className="cart-items-title cart-items-item" key={index}>
                    <img src={v.image} alt="" />
                    <p>{v.name}</p>
                    <p>${v.price}</p>
                    <p>{cartItem[v._id]}</p>
                    <p>${v.price * cartItem[v._id]}</p>
                    <p
                      className="cross-btn"
                      onClick={() => RemoveFromCart(v._id)}
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have promocode, Enter here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="PromoCode" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
