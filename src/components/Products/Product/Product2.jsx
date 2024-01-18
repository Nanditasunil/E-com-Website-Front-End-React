import "./Product.scss";
import prod from "../../../assets/products/tshirts/blue.png";

const Product = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Blue Tshirt </span>
        <span className="price">&#x20B9;699</span>
      </div>
    </div>
  );
};

export default Product;
