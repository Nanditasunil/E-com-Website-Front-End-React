import "./Tshirt.scss";
import prod from "../../../assets/products/tshirts/white.png";

const Tshirt2 = () => {
  return (
    <div className="prod-card">
      <div className="thumbnail">
        <img src={prod} alt="product" />
      </div>
      <div className="details">
        <span className="name">White tshirt </span>
        <span className="price">&#x20B9; 699</span>
      </div>
    </div>
  );
};

export default Tshirt2;
