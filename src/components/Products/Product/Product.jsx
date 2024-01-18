import "./Product.scss";
import prod from "../../../assets/products/hoodies/green.png";

const Product = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Green Hoodie</span>
        <span className="price">&#x20B9; 1299</span>
      </div>
    </div>
  );
};

export default Product;
