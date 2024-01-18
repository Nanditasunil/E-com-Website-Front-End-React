import "./Hoodie1.scss";
import prod from "../../../assets/products/hoodies/blue.png";

const Hoodie2 = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Blue hoodie </span>
        <span className="price">&#x20B9; 1299</span>
      </div>
    </div>
  );
};

export default Hoodie2;
