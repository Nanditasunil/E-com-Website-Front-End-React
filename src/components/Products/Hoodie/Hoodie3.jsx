import "./Hoodie1.scss";
import prod from "../../../assets/products/hoodies/red.png";

const Hoodie3 = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">Red Hoodie </span>
        <span className="price">&#x20B9; 1299</span>
      </div>
    </div>
  );
};

export default Hoodie3;
