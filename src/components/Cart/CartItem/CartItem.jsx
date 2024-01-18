import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/varsity/black.png";
import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="cartitem" />
        </div>
        <div className="prod-details">
          <span className="name">Black Hoodie</span>
          <MdClose className="closebtn" />
          <div className="quant-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text-cart">
            <span>3</span>
            <span>x</span>
            <span className="highlight">&#x20B9;1497</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
