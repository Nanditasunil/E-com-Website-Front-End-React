import { MdClose } from "react-icons/md";

import CartItem from "./CartItem/CartItem";

import "./Cart.scss";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart </span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text-cart">close</span>
          </span>
        </div>

        <>
          {/* binding items inside it  */}
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text-cart">Subtotal:</span>
              <span className="text-cart-total">&#x20B9;6780</span>
            </div>
            <div className="button">
              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">
                  Checkout
                </button>
              </div>
              {/* <button className="checkout-cta">Checkout</button> */}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
