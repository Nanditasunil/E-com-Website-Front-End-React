import "./Product.scss";
import prod from "../../../assets/products/socks/black.png";

const Product = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Black Socks </span>
        <span className="price">&#x20B9;299</span>
      </div>
    </div>
  );
};

export default Product;
